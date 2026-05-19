"use client";

import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Feedback from "@/components/Feedback";
import Widget from "@/components/Widget";

function useDraggable(initialX: number, initialY: number) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const dragRef = useRef<{
    startX: number;
    startY: number;
    posX: number;
    posY: number;
  } | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    if (
      (e.target as HTMLElement).closest(".window-btn") ||
      (e.target as HTMLElement).closest(".resize-handle")
    )
      return;
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragRef.current) return;
    setPosition({
      x: dragRef.current.posX + (e.clientX - dragRef.current.startX),
      y: dragRef.current.posY + (e.clientY - dragRef.current.startY),
    });
  };

  const onMouseUp = () => {
    dragRef.current = null;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  return { position, onMouseDown };
}

function useResizable(
  initialWidth: number,
  initialHeight: number,
  minWidth = 280,
  minHeight = 200,
) {
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });
  const resizeRef = useRef<{
    startWidth: number;
    startHeight: number;
    startX: number;
    startY: number;
  } | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    resizeRef.current = {
      startWidth: size.width,
      startHeight: size.height,
      startX: e.clientX,
      startY: e.clientY,
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!resizeRef.current) return;
    const newWidth = Math.max(
      minWidth,
      resizeRef.current.startWidth + (e.clientX - resizeRef.current.startX),
    );
    const newHeight = Math.max(
      minHeight,
      resizeRef.current.startHeight + (e.clientY - resizeRef.current.startY),
    );
    setSize({ width: newWidth, height: newHeight });
  };

  const onMouseUp = () => {
    resizeRef.current = null;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  return { size, onMouseDown };
}

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(true);

  const [openWindows, setOpenWindows] = useState({
    info: false,
    projects: false,
    contact: false,
  });

  const [activeWindow, setActiveWindow] = useState<string>("master");

  const toggleWindow = (windowName: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({ ...prev, [windowName]: !prev[windowName] }));
    setActiveWindow(windowName);
  };

  const closeWindow = (windowName: keyof typeof openWindows) => {
    setOpenWindows((prev) => ({ ...prev, [windowName]: false }));
  };

  const masterDrag = useDraggable(20, 20);
  const infoDrag = useDraggable(140, 60);
  const projectsDrag = useDraggable(260, 100);
  const contactDrag = useDraggable(200, 160);

  const masterResize = useResizable(2200, 900, 600, 450);
  const infoResize = useResizable(800, 500, 320, 250);
  const projectsResize = useResizable(1000, 650, 350, 250);
  const contactResize = useResizable(700, 600, 320, 300);

  return (
    <main
      style={{
        backgroundImage: "url('/bg.jpg')", // Put your image path here
        backgroundRepeat: "repeat",
      }}
      className="relative h-screen w-screen overflow-hidden bg-[#efeee9] font-rainy select-none p-2"
    >
      {isPortfolioOpen ? (
        <div
          onClick={() => setActiveWindow("master")}
          style={{
            top: `${masterDrag.position.y}px`,
            left: `${masterDrag.position.x}px`,
            width: `${masterResize.size.width}px`,
            height: `${masterResize.size.height}px`,
            maxWidth: "96vw",
            maxHeight: "94vh",
          }}
          className={`absolute bg-white border-2 border-black p-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
            activeWindow === "master" ? "z-10" : "z-0"
          }`}
        >
          <div className="border border-black bg-white flex flex-col h-full relative overflow-hidden">
            <div
              onMouseDown={masterDrag.onMouseDown}
              className="cursor-move border-b border-black px-3 py-1 grid grid-cols-3 items-center bg-white select-none"
            >
              <span className="text-left text-xs opacity-40">[C:\]</span>
              <span className="text-center tracking-wide text-sm">
                MY_PORTFOLIO.EXE
              </span>
              <div className="text-right flex justify-end">
                <button
                  onClick={() => setIsPortfolioOpen(false)}
                  className="window-btn w-5 h-5 border border-black inline-flex items-center justify-center bg-white text-xs hover:bg-black hover:text-white transition-colors"
                >
                  X
                </button>
              </div>
            </div>

            <div className="flex-1 relative bg-[#fafafa] p-6 pattern-dots overflow-hidden">
              <Widget />

              <div className="flex flex-col gap-8 absolute z-0">
                <button
                  onClick={() => toggleWindow("info")}
                  className="flex flex-col items-center w-20 group"
                >
                  <div className="w-12 h-12 border-2 border-black flex flex-col items-center justify-end bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-active:translate-y-1 group-active:shadow-none">
                    <div className="w-4 h-4 rounded-full border-2 border-black bg-black mb-1" />
                    <div className="w-8 h-3 border-t-2 border-x-2 border-black bg-black" />
                  </div>
                  <span className="text-base mt-2">INFO.EXE</span>
                </button>

                <button
                  onClick={() => toggleWindow("projects")}
                  className="flex flex-col items-center w-20 group"
                >
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-active:translate-y-1 group-active:shadow-none">
                    <div className="w-7 h-5 border-2 border-black bg-black rounded-sm" />
                  </div>
                  <span className="text-base mt-2 uppercase text-center">
                    PROJECTS.EXE
                  </span>
                </button>

                <button
                  onClick={() => toggleWindow("contact")}
                  className="flex flex-col items-center w-20 group"
                >
                  <div className="w-12 h-12 border-2 border-black flex items-center justify-center bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-active:translate-y-1 group-active:shadow-none">
                    <div className="w-7 h-4 border-2 border-black bg-white flex items-center justify-center">
                      <div className="w-full h-[1px] bg-black opacity-30" />
                    </div>
                  </div>
                  <span className="text-base mt-2 uppercase">CONTACT.EXE</span>
                </button>
              </div>

              {openWindows.info && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveWindow("info");
                  }}
                  style={{
                    top: `${infoDrag.position.y}px`,
                    left: `${infoDrag.position.x}px`,
                    width: `${infoResize.size.width}px`,
                    height: `${infoResize.size.height}px`,
                  }}
                  className={`absolute bg-white border-2 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
                    activeWindow === "info" ? "z-40" : "z-20"
                  }`}
                >
                  <div className="border border-black bg-white flex flex-col h-full relative">
                    <div
                      onMouseDown={infoDrag.onMouseDown}
                      className="cursor-move border-b border-black px-2 py-0.5 grid grid-cols-3 items-center bg-white"
                    >
                      <span className="opacity-40 text-xs text-left">ℹ</span>
                      <span className="text-sm text-center">INFO.EXE</span>
                      <div className="text-right flex justify-end">
                        <button
                          onClick={() => closeWindow("info")}
                          className="window-btn w-4 h-4 border border-black bg-white text-[10px] flex items-center justify-center hover:bg-black hover:text-white"
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                      <Hero />
                    </div>
                    {/* Corner Resize Handle */}
                    <div
                      onMouseDown={infoResize.onMouseDown}
                      className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-[2px] z-50"
                    >
                      <div className="w-2 h-2 border-r-2 border-b-2 border-black opacity-60" />
                    </div>
                  </div>
                </div>
              )}

              {/* PROJECTS WINDOW */}
              {openWindows.projects && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveWindow("projects");
                  }}
                  style={{
                    top: `${projectsDrag.position.y}px`,
                    left: `${projectsDrag.position.x}px`,
                    width: `${projectsResize.size.width}px`,
                    height: `${projectsResize.size.height}px`,
                  }}
                  className={`absolute bg-white border-2 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
                    activeWindow === "projects" ? "z-40" : "z-20"
                  }`}
                >
                  <div className="border border-black bg-white flex flex-col h-full relative">
                    {/* 1PX THIN LINE HEADER */}
                    <div
                      onMouseDown={projectsDrag.onMouseDown}
                      className="cursor-move border-b border-black px-2 py-0.5 grid grid-cols-3 items-center bg-white"
                    >
                      <span className="opacity-40 text-xs text-left">P</span>
                      <span className="text-sm text-center uppercase">
                        PROJECTS.EXE
                      </span>
                      <div className="text-right flex justify-end">
                        <button
                          onClick={() => closeWindow("projects")}
                          className="window-btn w-4 h-4 border border-black bg-white text-[10px] flex items-center justify-center hover:bg-black hover:text-white"
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                      <Card />
                    </div>
                    {/* Corner Resize Handle */}
                    <div
                      onMouseDown={projectsResize.onMouseDown}
                      className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-[2px] z-50"
                    >
                      <div className="w-2 h-2 border-r-2 border-b-2 border-black opacity-60" />
                    </div>
                  </div>
                </div>
              )}

              {/* CONTACT WINDOW */}
              {openWindows.contact && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveWindow("contact");
                  }}
                  style={{
                    top: `${contactDrag.position.y}px`,
                    left: `${contactDrag.position.x}px`,
                    width: `${contactResize.size.width}px`,
                    height: `${contactResize.size.height}px`,
                  }}
                  className={`absolute bg-white border-2 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col ${
                    activeWindow === "contact" ? "z-40" : "z-20"
                  }`}
                >
                  <div className="border border-black bg-white flex flex-col h-full relative">
                    <div
                      onMouseDown={contactDrag.onMouseDown}
                      className="cursor-move border-b border-black px-2 py-0.5 grid grid-cols-3 items-center bg-white"
                    >
                      <span className="opacity-40 text-xs text-left">C</span>
                      <span className="text-center text-sm">CONTACT.EXE</span>
                      <div className="text-right flex justify-end">
                        <button
                          onClick={() => closeWindow("contact")}
                          className="window-btn w-4 h-4 border border-black bg-white text-[10px] flex items-center justify-center hover:bg-black hover:text-white"
                        >
                          X
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex-1 overflow-y-auto space-y-4">
                      <Feedback />
                    </div>

                    <div
                      onMouseDown={contactResize.onMouseDown}
                      className="resize-handle absolute bottom-0 right-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-[2px] z-50"
                    >
                      <div className="w-2 h-2 border-r-2 border-b-2 border-black opacity-60" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseDown={masterResize.onMouseDown}
              className="resize-handle absolute bottom-0 right-0 w-5 h-5 cursor-se-resize flex items-end justify-end p-[3px] z-50 bg-white border-t border-l border-black"
            >
              <div className="w-2 h-2 border-r-2 border-b-2 border-black" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
          <button
            onClick={() => setIsPortfolioOpen(true)}
            className="pointer-events-auto px-6 py-3 border-4 border-black font-rainy text-4xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#efeee9] text-black hover:bg-black hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none transition-all select-none"
          >
            [ RESTART_PORTFOLIO.EXE ]
          </button>
        </div>
      )}

      <div className="absolute bottom-8 left-8 text-black/10 text-6xl pointer-events-none uppercase">
        System_32
      </div>
    </main>
  );
}

"use client";

import { useState, useRef } from "react";

export function useDraggable(initialX: number, initialY: number) {
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
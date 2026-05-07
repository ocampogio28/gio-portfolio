"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface WebDesignProps {
  title: string;
  images: string[];
}

export default function WebDesignCard({ title, images }: WebDesignProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight" && isOpen) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && isOpen) {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* 1. THE GRID CARD */}
      <div
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer relative"
      >
        {images.length > 1 && (
          <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] bg-zinc-200/50 -z-10 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
        )}

        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-200 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
          <Image src={images[0]} alt={title} fill className="object-cover" />
          {images.length > 1 && (
            <div className="absolute bottom-4 right-6 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-zinc-200 shadow-sm">
              <p className="text-[10px] font-mono font-bold text-zinc-600">
                {images.length} ITEMS
              </p>
            </div>
          )}
        </div>
        <h3 className="mt-5 px-2 font-serif font-bold text-xl text-zinc-900 tracking-tight">
          {title}
        </h3>
      </div>

      {/* 2. THE LIGHTBOX MODAL */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:p-20 cursor-zoom-out"
        >
          {/* FIXED CLOSE BUTTON:
              - Added top-16 and mt-8 to clear any sticky/fixed Navbars
              - Added a slight shadow for depth
          */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-16 right-10 mt-8 p-4 bg-zinc-900 text-white rounded-full transition-all hover:scale-110 active:scale-95 z-[10000] shadow-xl cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* CONSTRAINED IMAGE CONTAINER */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-video flex items-center justify-center cursor-default bg-white rounded-2xl overflow-hidden"
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              fill
              className="object-contain p-6 md:p-14"
              priority
            />

            {/* NAVIGATION ARROWS */}
            {images.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <button
                  onClick={prevImage}
                  className="p-3 bg-white/90 hover:bg-white rounded-full transition-all pointer-events-auto shadow-md border border-zinc-100"
                >
                  <ChevronLeft className="w-6 h-6 text-zinc-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-3 bg-white/90 hover:bg-white rounded-full transition-all pointer-events-auto shadow-md border border-zinc-100"
                >
                  <ChevronRight className="w-6 h-6 text-zinc-900" />
                </button>
              </div>
            )}
          </div>

          {/* FOOTER INFO */}
          <div className="mt-12 text-center pointer-events-none">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 tracking-tight">
              {title}
            </h2>
            {images.length > 1 && (
              <p className="font-mono text-xs text-zinc-500 mt-3 tracking-[0.3em] uppercase">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

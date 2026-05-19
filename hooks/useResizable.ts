"use client";

import { useState, useRef } from "react";

export function useResizable(
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
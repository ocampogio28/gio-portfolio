"use client";

import { useCallback } from "react";

export function useSound(src: string, defaultVolume: number = 0.4) {
  const play = useCallback(() => {
    try {
      const audio = new Audio(src);
      audio.volume = defaultVolume;
      audio.play();
    } catch (e) {
      console.warn("Audio playback failed:", e);
    }
  }, [src, defaultVolume]);

  return { play };
}
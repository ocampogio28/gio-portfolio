"use client";

import { useState, useEffect } from "react";

interface FooterProps {
  activeWindow?: string;
}

export default function Footer({ activeWindow = "master" }: FooterProps) {
  const [time, setTime] = useState("");
  const [notification, setNotification] = useState("");

  // Keep the clock perfectly updated to the minute
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (textToCopy: string, label: string) => {
    navigator.clipboard.writeText(textToCopy);
    setNotification(`${label} copied!`);

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <footer className="w-full h-10 bg-[#efeee9] border-t border-black flex items-center justify-between px-2 shrink-0 select-none z-10 font-rainy text-sm relative">
      {/* ─── SIMPLE RETRO NOTIFICATION TRAY ─────────────────────────── */}
      {notification && (
        <div className="absolute top-[-34px] left-2 bg-black text-white px-3 py-1 text-xs border border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono tracking-wide animate-bounce z-50">
          💾 {notification.toUpperCase()}
        </div>
      )}

      <div className="flex items-center gap-1.5 h-full">
        <div className="h-6 px-2.5 border border-black bg-white flex items-center gap-1 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          START
        </div>
        <div className="w-[1px] h-4 bg-black/20 mx-0.5 hidden sm:block" />

        {/* Email Shortcut */}
        <button
          onClick={() => handleCopy("ocampogio28@gmail.com", "Email")}
          className="h-6 px-2 border border-transparent hover:border-black hover:bg-white text-xs flex items-center gap-1 text-zinc-600 hover:text-black transition-all cursor-pointer"
        >
          <span className="hidden md:inline">ocampogio28@gmail.com</span>
          <span className="inline md:hidden">✉ Email</span>
        </button>

        {/* Phone Shortcut */}
        <button
          onClick={() => handleCopy("+639953050519", "Phone number")}
          className="h-6 px-2 border border-transparent hover:border-black hover:bg-white text-xs flex items-center gap-1 text-zinc-600 hover:text-black transition-all cursor-pointer"
        >
          <span className="hidden md:inline">(+63) 995 305 0519</span>
          <span className="inline md:hidden">📞 Phone</span>
        </button>
      </div>

      <div className="flex items-center gap-3 h-full">
        {/* Retro Copyright Statement */}
        <p className="text-[11px] text-zinc-500 font-mono hidden xs:block">
          © {new Date().getFullYear()} GIO. ALL RIGHTS RESERVED.
        </p>

        <div className="border border-zinc-400 bg-white px-2.5 h-6 flex items-center shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1)] text-xs font-mono gap-2">
          <div className="w-[px] h-2.5 bg-black/10 hidden md:block" />
          <span className="font-bold tracking-tight">{time || "12:00 PM"}</span>
        </div>
      </div>
    </footer>
  );
}

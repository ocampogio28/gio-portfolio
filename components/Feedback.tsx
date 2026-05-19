"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const { error } = await supabase
        .from("feedback")
        .insert([{ name, message }]);

      if (error) {
        console.error("Submission failed:", error.message);
        setStatus("error");
        return;
      }

      setStatus("sent");
      setName("");
      setMessage("");

      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full max-w-sm select-none">
      <div className="bg-[#efeee9] border-2 border-black p-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        <div className="border border-black bg-white px-2 py-1 flex items-center justify-between mb-1 text-xs font-mono">
          <div className="flex items-center gap-1">
            <span className="font-rainy tracking-wider uppercase text-base ">
              {status === "sent"
                ? "success.sys"
                : status === "error"
                  ? "error.sys"
                  : "Feeback.exe"}
            </span>
          </div>
          <div className="w-4 h-4 border border-black flex items-center justify-center font-bold text-[9px] bg-white">
            _
          </div>
        </div>

        <div className="border border-black bg-white p-5 pattern-dots relative">
          <h3 className="text-xl font-rainy font-bold mb-4 tracking-wide text-black uppercase">
            {status === "sent"
              ? "Thanks for the feedback!"
              : status === "error"
                ? "Something went wrong..."
                : "Contact me for work"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <input
                type="text"
                className="w-full text-sm font-rainy px-3 py-2 border border-black bg-[#fafafa] focus:bg-white transition outline-none shadow-[inset_2px_2px_0px_rgba(0,0,0,0.05),2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-zinc-400 disabled:opacity-50"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="flex flex-col">
              <textarea
                className="w-full text-sm font-rainy px-3 py-2 border border-black bg-[#fafafa] focus:bg-white transition outline-none resize-none shadow-[inset_2px_2px_0px_rgba(0,0,0,0.05),2px_2px_0px_0px_rgba(0,0,0,1)] focus:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] placeholder:text-zinc-400 disabled:opacity-50"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                disabled={status === "sending"}
              />
            </div>

            <div className="flex pt-1">
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full font-rainy text-lg py-1.5 border border-black font-bold tracking-widest uppercase transition-all select-none cursor-pointer text-black ${
                  status === "sent"
                    ? "bg-green-200 text-green-900 shadow-none translate-x-[1px] translate-y-[1px]"
                    : status === "error"
                      ? "bg-red-200 text-red-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                      : "bg-[#efeee9] hover:bg-black hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                } disabled:opacity-50`}
              >
                {status === "idle" && "Send Msg"}
                {status === "sending" && "Sending..."}
                {status === "sent" && "Sent!"}
                {status === "error" && "Retry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Feedback() {
  const [name, setName] = useState(""); // Kept your 'name' variable
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

      // Reset button text after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#D1CFCD] rounded-[32px] p-6 shadow-sm border border-zinc-300/40">
        <h3 className="text-lg font-mono text-zinc-900 mb-6 px-1">
          {status === "sent"
            ? "Thanks for the feedback!"
            : status === "error"
              ? "Something went wrong..."
              : "Leave a feedback or Contact me for work"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Input */}
          <input
            type="text"
            className="w-full bg-[#FAF9F7] text-zinc-700 font-mono text-sm rounded-[16px] px-5 py-4 focus:outline-none border border-transparent focus:border-zinc-400 transition placeholder:text-zinc-400"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === "sending"}
          />

          {/* Message Input */}
          <textarea
            className="w-full bg-[#FAF9F7] text-zinc-700 font-mono text-sm rounded-[16px] px-5 py-4 focus:outline-none border border-transparent focus:border-zinc-400 transition resize-none placeholder:text-zinc-400"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            disabled={status === "sending"}
          />

          {/* Styled Button */}
          <div className="flex pt-2">
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`${
                status === "sent"
                  ? "bg-green-600"
                  : status === "error"
                    ? "bg-red-500"
                    : "bg-[#555351]"
              } text-[#FAF9F7] font-mono text-base rounded-[14px] px-8 py-3 hover:opacity-90 transition active:scale-95 shadow-md disabled:opacity-50`}
            >
              {status === "idle" && "Send"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent!"}
              {status === "error" && "Retry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

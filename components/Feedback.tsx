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
    <div className="w-full max-w-sm">
      {/* Container: Changed to white, square (rounded-none), and black border */}
      <div className="bg-white rounded-none p-6 border-2 border-black">
        <h3 className="text-lg font-mono text-zinc-900 mb-6 px-1 uppercase tracking-tighter font-bold">
          {status === "sent"
            ? "Thanks for the feedback!"
            : status === "error"
              ? "Something went wrong..."
              : "Contact me for work"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name Input: rounded-none and black border */}
          <input
            type="text"
            className="w-full bg-[#FAF9F7] text-zinc-700 font-mono text-sm rounded-none px-5 py-4 focus:outline-none border border-black focus:bg-white transition placeholder:text-zinc-400"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={status === "sending"}
          />

          {/* Message Input: rounded-none and black border */}
          <textarea
            className="w-full bg-[#FAF9F7] text-zinc-700 font-mono text-sm rounded-none px-5 py-4 focus:outline-none border border-black focus:bg-white transition resize-none placeholder:text-zinc-400"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            disabled={status === "sending"}
          />

          {/* Button: rounded-none and solid colors */}
          <div className="flex pt-2">
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`${
                status === "sent"
                  ? "bg-green-600"
                  : status === "error"
                    ? "bg-red-500"
                    : "bg-black"
              } text-white font-mono text-base rounded-none px-8 py-3 hover:opacity-90 transition disabled:opacity-50 w-full uppercase tracking-widest font-bold`}
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

"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const toastId = toast.loading("Sending feedback...");

    try {
      const { error } = await supabase
        .from("feedback")
        .insert([{ name, message }]);

      if (error) {
        toast.error(`Submission failed: ${error.message}`, { id: toastId });
        return;
      }

      toast.success("Feedback sent successfully!", { id: toastId });

      // Reset form
      setName("");
      setMessage("");
    } catch {
      // Professional approach: Optional catch binding (no unused 'err' variable)
      toast.error("Network error. Please check your connection.", {
        id: toastId,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border p-4 rounded-xl max-w-md bg-white shadow-sm"
    >
      <h2 className="text-xl font-semibold text-black">Leave Feedback</h2>

      <input
        className="w-full border p-2 rounded text-black bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2 rounded text-black bg-gray-50 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

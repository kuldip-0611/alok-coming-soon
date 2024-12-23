import React, { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = "bb@alokfab.in";
    const subject = "Inquiry from Alok Fabrications Website";
    const body = encodeURIComponent(message);

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailtoLink;
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md w-full">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="flex-1 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors"
      >
        <Send size={18} />
      </button>
    </form>
  );
}

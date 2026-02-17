"use client";

import { Send } from "lucide-react";

// Value is setInput, onChange is e.target.value and onSend is sendMessage array function in chat/page
interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };
  return (
    <div className="bg-white border-t border-dark/10 p-4 flex items-center gap-4 fixed bottom-0 left-80 right-0">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe your staffing needs..."
        className="flex-1 bg-background rounded-xl p-3 border border-dark/10 focus:outline-none"
      />

      <button
        type="button"
        onClick={onSend}
        className="bg-primary text-white p-3 rounded-xl hover:opacity-90"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
}

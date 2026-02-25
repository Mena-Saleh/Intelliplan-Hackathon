"use client";

import { Send } from "lucide-react";

interface TProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onSend }: TProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };
  return (
    <div className="bg-white border-t border-dark/10 p-4 flex items-center gap-4 sticky bottom-0 z-50">
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

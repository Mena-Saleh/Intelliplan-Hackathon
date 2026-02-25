"use client";

import { useEffect, useRef } from "react";
import ChatMatchCard from "./chat-match-card";
import { TMessage } from "@/types/chat";

type TProps = {
  messages: TMessage[];
};

export default function ChatMessages({ messages }: TProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 overflow-y-auto px-12 py-8 space-y-6 pb-32">
      {messages.map((msg, index) => {
        if (msg.type === "text") {
          return (
            <div
              key={index}
              className={`max-w-md w-fit whitespace-pre-line ${
                msg.role === "user"
                  ? "ml-auto bg-primary text-white"
                  : "bg-white"
              } p-4 rounded-2xl shadow-sm border border-dark/10`}
            >
              {msg.content}
            </div>
          );
        }

        if (msg.type === "loading") {
          return (
            <div
              key={index}
              className="max-w-md bg-white p-4 rounded-2xl shadow-sm border border-dark/10 animate-pulse"
            >
              {msg.content}
            </div>
          );
        }

        if (msg.type === "match") {
          return (
            <ChatMatchCard
              key={index}
              candidates={msg.candidates}
            />
          );
        }

        return null;
      })}

      <div ref={bottomRef} />
    </div>
  );
}

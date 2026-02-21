"use client";

import { Clock, MessageSquare } from "lucide-react";
import type { TChat } from "@/src/types/chat";
import RequestButton from "./request-button";
import { formatDate } from "@/src/utils/format-date";

type TProps = {
  activeChatId?: string | null;
  chats: TChat[];
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
};

export default function SidebarRequest({ activeChatId = null, onNewChat, chats, onSelectChat }: TProps) {

  return (
    <>
      <div
        className={`border-b border-dark/10 px-4 py-4 z-9999`}
      >
        <RequestButton
          action={onNewChat}
          variant={"full"}
        />
      </div>

      {chats.length === 0 ? (
        <div className="flex-1 px-6 pt-8 text-center">
          <p className="text-sm text-body/50">
            No conversations yet. Start a new chat!
          </p>
        </div>

      ) : (
        <div
          className={`
            flex-1 overflow-y-auto space-y-3 px-4 py-4
          `}
        >
          {chats.map((chat) => {
            const isActive = activeChatId === chat.id;


            return (
              <div
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`
                  cursor-pointer rounded-2xl p-4 transition-all relative isolate
                  ${isActive ? "bg-primary/10 shadow-sm" : "hover:bg-black/5"}
                `}
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-1 h-5 w-5 text-primary" />

                  <div className="min-w-0">
                    <p className="font-semibold truncate">{chat.title}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-body/50">
                      <Clock className="h-3 w-3" />
                      {formatDate(chat.createdAt)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

"use client";

import { Clock, MessageSquare } from "lucide-react";
import type { Chat } from "../types";
import RequestButton from "./request-button";
import { useSidebar } from "../contexts/sidebar-context";

type RequestProps = {
  activeChatId?: string | null;
  chats: Chat[];
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
};

const formatDate = (date: Date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function SidebarRequest({
  activeChatId = null,
  onNewChat,
  chats,
  onSelectChat,
}: RequestProps) {
  const { collapsed, phase, showTooltip } = useSidebar();
  const compact = collapsed || phase === "collapsing";

  return (
    <>
      {/* New request button */}
      <div
        className={`border-b border-dark/10 ${compact ? "p-2" : "px-4 py-4"} z-9999`}
      >
        <RequestButton
          action={onNewChat}
          variant={compact ? "compact" : "full"}
        />
      </div>

      {chats.length === 0 ? (
        !compact && (
          <div className="flex-1 px-6 pt-8 text-center">
            <p className="text-sm text-body/50">
              No conversations yet. Start a new chat!
            </p>
          </div>
        )
      ) : (
        <div
          className={`
            flex-1 overflow-y-auto
            ${compact ? "flex flex-col items-center gap-2 py-3" : "space-y-3 px-4 py-4"}
          `}
        >
          {chats.map((chat) => {
            const isActive = activeChatId === chat.id;

            if (compact) {
              // --- COLLAPSED: icon rail ---
              return (
                <button
                  type="button"
                  key={chat.id}
                  onClick={() => onSelectChat(chat.id)}
                  title={
                    showTooltip
                      ? `${chat.title} • ${formatDate(chat.createdAt)}`
                      : undefined
                  }
                  aria-label={showTooltip ? chat.title : undefined}
                  className={`
                    relative flex h-10 w-10 items-center justify-center rounded-xl
                    transition-all
                    ${isActive ? "bg-primary/15 text-primary" : "hover:bg-black/5"}
                  `}
                >
                  <MessageSquare className="h-5 w-5" />
                </button>
              );
            }

            // --- EXPANDED: full cards ---
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

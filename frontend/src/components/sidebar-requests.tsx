import { Clock, MessageSquare } from "lucide-react";
import type { Chat } from "../types";
import RequestButton from "./request-button";

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
  return (
    <>
      <div className="border-b border-dark/10 px-4 py-4">
        <RequestButton action={onNewChat} styles="w-full" />
      </div>

      {chats.length === 0 ? (
        <div className="flex-1 px-6 pt-8 text-center">
          <p className="text-sm text-body/50">
            No conversations yet. Start a new chat!
          </p>
        </div>
      ) : (
        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {chats.map((chat) => {
            const isActive = activeChatId === chat.id;

            return (
              <div
                key={chat.id}
                className={`${isActive ? "bg-primary/10 shadow-sm" : "hover:bg-black/5"
                  } cursor-pointer rounded-2xl p-4 transition-all relative isolate`}
              >
                <div className="flex items-start gap-3">
                  <MessageSquare className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{chat.title}</p>
                    <button
                      type="button"
                      className={`mt-1 flex items-center gap-2 text-xs text-body/50`}
                      onClick={() => onSelectChat?.(chat.id)}
                    >
                      <span className="absolute inset-0 z-999"></span>
                      <Clock className="h-3 w-3" />
                      {formatDate(chat.createdAt)}
                    </button>
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

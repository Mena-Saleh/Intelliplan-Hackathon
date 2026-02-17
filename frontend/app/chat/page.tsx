"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import type { Chat } from "@/src/types/Chat";
import ChatWelcome from "@/src/components/chatWelcome";
import ChatInput from "@/src/components/chatInput";
import SidebarRequests from "@/src/components/sidebar-requests";
import { customers } from "@/src/data/mock-customer-data";
import { fastApiService } from "@/src/services/fastApiService";
import { getDisplayName } from "@/src/utils/getDisplayName";
import { Star } from "lucide-react";
import { useRef, useEffect } from "react";


export default function ChatPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const activeChat = chats.find((c) => c.id === activeChatId);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages.length]);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New staffing request",
      createdAt: new Date(),
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeChat) return;

    const userMessage = input;

    // Add user message
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChat.id
          ? {
            ...chat,
            messages: [
              ...chat.messages,
              { role: "user", type: "text", content: userMessage },
            ],
          }
          : chat
      )
    );

    setInput("");

    try {
      const response = await fastApiService.chat({
        session_id: activeChat.sessionId,
        message: userMessage,
      });

      // Add assistant message
      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChat.id
            ? {
              ...chat,
              sessionId: chat.sessionId ?? response.session_id,
              messages: [
                ...chat.messages,
                ...(response.assistant_message
                  ? [
                    {
                      role: "bot",
                      type: "text",
                      content: response.assistant_message,
                    } as const,
                  ]
                  : []),
              ],
            }
            : chat
        )
      );

      // 🔥 If chat complete → trigger recommend
      if (response.status === "complete") {
        const staffingNeed = response.staffing_need?.data;

        // Add loading message
        setChats((prev) =>
          prev.map((chat) =>
            chat.id === activeChat.id
              ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    role: "bot",
                    type: "loading",
                    content:
                      "Looking for the best candidates... Almost there.",
                  },
                ],
              }
              : chat
          )
        );

        const recommendResponse = await fastApiService.recommend(
          staffingNeed
        );

        const transformed = recommendResponse.top_matches.map((c) => ({
          id: c.id,
          rating: c.rating,
          risk: c.risk_level,
          riskReason: c.risk_reason,
          competences: c.consultant.competences,
          customerExperience: c.consultant.customer_experience,
        }));

        setChats((prev) =>
          prev.map((chat) =>
            chat.id === activeChat.id
              ? {
                ...chat,
                messages: [
                  ...chat.messages.filter((m) => m.type !== "loading"),
                  {
                    role: "bot",
                    type: "match",
                    candidates: transformed,
                  },
                ],
              }
              : chat
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar user={{ name: "Johan Andersson", role: "Warehouse AB" }}>
        <SidebarRequests
          activeChatId={activeChatId}
          chats={chats}
          onNewChat={createNewChat}
          onSelectChat={setActiveChatId}
        />
      </Sidebar>

      <main className="ml-80 flex-1 flex flex-col">
        {!activeChat ? (
          <ChatWelcome
            onNewChat={createNewChat}
            username={customers[0].name}
          />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-12 py-8 space-y-6 pb-32">
              {activeChat.messages.map((msg, index) => {
                if (msg.type === "text") {
                  return (
                    <div
                      key={index}
                      className={`max-w-md w-fit whitespace-pre-line ${msg.role === "user"
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
                    <div
                      key={index}
                      className="max-w-2xl bg-white p-6 rounded-2xl shadow-sm border border-dark/10 space-y-6"
                    >
                      <div className="flex justify-between items-center">
                        <p className="font-semibold text-lg">
                          Top Recommended Consultants
                        </p>

                        <div className="relative group">
                          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
                            Send Request To
                          </button>

                          <div className="absolute right-0 w-44 bg-white border border-dark/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                            <button
                              onClick={() => { }}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-background"
                            >
                              All
                            </button>
                            <button
                              onClick={() => { }}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-background"
                            >
                              Low Risk Only
                            </button>
                          </div>
                        </div>
                      </div>


                      {msg.candidates.map((candidate, i) => {
                        const riskColor =
                          candidate.risk === "LOW"
                            ? "bg-green-100 text-green-700"
                            : candidate.risk === "MEDIUM"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700";
                        return (
                          <div
                            key={i}
                            className="p-4 rounded-xl bg-background border border-dark/10 space-y-4 flex flex-col"
                          >
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-lg">
                                  {getDisplayName(candidate.id)}
                                </p>

                                {candidate.rating && (
                                  <p className="text-sm text-body/70">
                                    <Star className="inline w-4 h-4 text-yellow-500 mr-1" />
                                    Rating: {candidate.rating}
                                  </p>
                                )}
                              </div>

                              <div className="flex items-center gap-2">


                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${riskColor}`}
                                >
                                  {candidate.risk} RISK
                                </span>
                              </div>
                            </div>

                            {/* Risk Reason */}
                            <p className="text-sm text-body/80">
                              {candidate.riskReason}
                            </p>

                            {/* Competences */}
                            <div>
                              <p className="text-sm font-medium">
                                Competences:
                              </p>
                              <ul className="text-xs text-body/70 space-y-1">
                                {candidate.competences.map((comp, idx) => (
                                  <li key={idx}>• {comp}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Customer Experience */}
                            <div>
                              <p className="text-sm font-medium">
                                Customer Experience:
                              </p>
                              <ul className="text-xs text-body/70 space-y-1">
                                {candidate.customerExperience.map((exp, idx) => (
                                  <li key={idx}>• {exp}</li>
                                ))}
                              </ul>
                            </div>
                            <button
                              onClick={() => { }}
                              className="bg-primary text-white text-xs px-3 py-1 rounded-md hover:opacity-90 transition w-28 h-8 ml-auto"
                            >
                              Send Request
                            </button>
                          </div>
                        );

                      })}
                    </div>
                  );
                }

                return null;
              })}
            </div>
            <div ref={bottomRef} />

            <ChatInput
              value={input}
              onChange={setInput}
              onSend={sendMessage}
            />
          </>
        )}
      </main>
    </div>
  );
}

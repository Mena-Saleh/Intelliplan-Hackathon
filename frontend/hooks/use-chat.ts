"use client";

import { useState } from "react";
import type { TChat, TMessage, TMatchCandidate } from "@/types/chat";
import type {
  TChatResponse,
  TRecommendResponse,
  TStaffingNeed,
} from "@/types/intelliplan-api";
import { intelliplanApiService } from "@/services/intelliplan-api-service";

export function useChat() {
  const [chats, setChats] = useState<TChat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [input, setInput] = useState("");

  const activeChat = chats.find((c) => c.id === activeChatId);

  const textMessage = (role: "bot" | "user", content: string): TMessage => ({
    role,
    type: "text",
    content,
  });

  const loadingMessage = (content: string): TMessage => ({
    role: "bot",
    type: "loading",
    content,
  });

  const matchMessage = (candidates: TMatchCandidate[]): TMessage => ({
    role: "bot",
    type: "match",
    candidates,
  });

  const createNewChat = async () => {
    const newChat: TChat = {
      id: Date.now().toString(),
      title: "New staffing request",
      createdAt: new Date(),
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newChat.id);

    const response: TChatResponse = await intelliplanApiService.chat({
      session_id: null,
      message: "Start staffing conversation",
    });

    setChats((prev: TChat[]) =>
      prev.map((chat) =>
        chat.id === newChat.id
          ? {
              ...chat,
              sessionId: response.session_id,
              messages: response.assistant_message
                ? [textMessage("bot", response.assistant_message)]
                : [],
            }
          : chat
      )
    );
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeChat) return;

    const userInput = input;
    setInput("");

    setChats((prev: TChat[]) =>
      prev.map((chat) =>
        chat.id === activeChat.id
          ? {
              ...chat,
              messages: [...chat.messages, textMessage("user", userInput)],
            }
          : chat
      )
    );

    const response: TChatResponse = await intelliplanApiService.chat({
      session_id: activeChat.sessionId ?? null,
      message: userInput,
    });

    handleBotResponse(activeChat.id, response);
  };

  const handleBotResponse = async (
    chatId: string,
    response: TChatResponse
  ) => {
    setChats((prev: TChat[]) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              sessionId: chat.sessionId ?? response.session_id,
              messages: [
                ...chat.messages,
                ...(response.assistant_message
                  ? [textMessage("bot", response.assistant_message)]
                  : []),
              ],
            }
          : chat
      )
    );

    if (response.status === "complete" && response.staffing_need) {
      await handleRecommendation(chatId, response.staffing_need.data);
    }
  };

  const handleRecommendation = async (
    chatId: string,
    staffingNeed: TStaffingNeed
  ) => {
    setChats((prev: TChat[]) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                loadingMessage("Looking for the best candidates..."),
              ],
            }
          : chat
      )
    );

    const recommendResponse: TRecommendResponse =
      await intelliplanApiService.recommend(staffingNeed);

    const transformed: TMatchCandidate[] =
      recommendResponse.top_matches.map((c) => ({
        id: c.id,
        rating: c.rating,
        risk: c.risk_level,
        riskReason: c.risk_reason,
        competences: c.consultant.competences,
        customerExperience: c.consultant.customer_experience,
      }));

    setChats((prev: TChat[]) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [
                ...chat.messages.filter((m) => m.type !== "loading"),
                matchMessage(transformed),
              ],
            }
          : chat
      )
    );
  };

  return {
    chats,
    activeChat,
    activeChatId,
    setActiveChatId,
    input,
    setInput,
    createNewChat,
    sendMessage,
  };
}

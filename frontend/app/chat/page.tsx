"use client";

import Sidebar from "@/components/sidebar/sidebar";
import SidebarRequests from "@/components/sidebar/sidebar-requests";
import ChatWelcome from "@/components/chat/chat-welcome";
import ChatInput from "@/components/chat/chat-input";
import { customers } from "@/data/mock-customer-data";
import { useChat } from "@/hooks/use-chat";
import ChatMessages from "@/components/chat/chat-messages";

export default function ChatPage() {
  const {
    chats,
    activeChat,
    activeChatId,
    setActiveChatId,
    input,
    setInput,
    createNewChat,
    sendMessage,
  } = useChat();

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
            <ChatMessages messages={activeChat.messages} />
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

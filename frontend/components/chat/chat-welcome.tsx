"use client";
import { MessageSquare } from "lucide-react";
import RequestButton from "../common/request-button";

interface TProps {
  onNewChat: () => void;
  username: string;
}

export default function ChatWelcome({ onNewChat, username }: TProps) {
  return (
    <div className="flex flex-1 items-center justify-center px-8">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 flex h-26 w-26 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-secondary">
          <MessageSquare className="h-12 w-12 text-white" />
        </div>

        <h2 className="mb-4">Welcome, {username}</h2>

        <p className="mb-4 text-body/70">
          Describe your staffing needs in plain language and I'll find the
          best available consultants for you.
        </p>

        <RequestButton
          action={onNewChat}
          label="Start New Request"
          variant="mid"
        />
      </div>
    </div>
  );
}

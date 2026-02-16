"use client";
import { MessageSquare } from "lucide-react";

// Will call on createNewChat in chat/page
interface ChatWelcomeProps {
    onNewChat: () => void;
}

export default function ChatWelcome({ onNewChat }: ChatWelcomeProps) {
    return (
        <>
            {/* // If cht is not active, show this component */}
            <div className="flex-1 flex items-center justify-center px-8">
                <div className="text-center max-w-md">
                    <div className="mx-auto mb-4 w-26 h-26 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                        <MessageSquare className="w-12 h-12 text-white" />
                    </div>

                    <h2 className="mb-4">Welcome, Johan!</h2>

                    <p className="text-body/70 mb-4">
                        Describe your staffing needs in plain language
                        and I'll find the best available consultants for
                        you.
                    </p>

                    <button
                        onClick={onNewChat}
                        className="bg-accent text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition duration-200"
                    >
                        + Start New Request
                    </button>
                </div>
            </div>
        </>
    )
}
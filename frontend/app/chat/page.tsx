"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import { MessageSquare, Send } from "lucide-react";
import { Chat } from "@/src/models/Chat";
import { MOCK_CHAT_DATA } from "@/src/data/mockChatData";
import ChatWelcome from "@/src/components/chatWelcome";
import ChatInput from "@/src/components/chatInput";





export default function ChatPage() {
	const [chats, setChats] = useState<Chat[]>([]);
	const [activeChatId, setActiveChatId] = useState<string | null>(null);
	const [input, setInput] = useState("");

	const activeChat = chats.find((c) => c.id === activeChatId);


	// Creating a new chat. Id and time of creation is set here, and mock mesages are set in src/data/mockChatData.ts
	const createNewChat = () => {
		const newChat: Chat = {
			...MOCK_CHAT_DATA,
			id: Date.now().toString(),
			createdAt: new Date(),
		};

		setChats([newChat, ...chats]);
		setActiveChatId(newChat.id);
	};

	const sendMessage = () => {
		if (!input.trim() || !activeChat) return;

		const updatedChats = chats.map((chat) =>
			chat.id === activeChat.id
				? {
					...chat,
					messages: [
						...chat.messages,
						{
							role: "user",
							type: "text",
							content: input,
						},
					],
				}
				: chat,
		);

		setChats(updatedChats);
		setInput("");
	};

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar
				variant="customer"
				chats={chats}
				activeChatId={activeChatId}
				onNewChat={createNewChat}
				onSelectChat={setActiveChatId}
				user={{ name: "Johan Andersson", role: "Warehouse AB" }}
			/>

			<main className="ml-80 flex-1 flex flex-col">
				{/* EMPTY STATE */}
				{!activeChat ? (

					// TODO: Move into component Chat Welcome
					<ChatWelcome onNewChat={createNewChat} />
				) : (
					<>
						{/* MESSAGES */}
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

								if (msg.type === "match") {
									return (
										<div
											key={index}
											className="max-w-xl bg-white p-5 rounded-2xl shadow-sm border border-dark/10 space-y-4"
										>
											<p className="font-semibold text-body">
												Here are the best available
												matches:
											</p>

											{msg.candidates.map(
												(candidate, i) => {
													const riskColor =
														candidate.risk === "LOW"
															? "bg-green-100 text-green-700"
															: candidate.risk ===
																"MEDIUM"
																? "bg-yellow-100 text-yellow-700"
																: "bg-red-100 text-red-700";

													return (
														<div
															key={i}
															className="p-3 rounded-xl bg-background border border-dark/10"
														>
															<div className="flex justify-between items-center mb-2">
																<p className="font-medium">
																	{
																		candidate.name
																	}
																</p>

																<span
																	className={`px-2 py-1 rounded-full text-xs font-medium ${riskColor}`}
																>
																	{
																		candidate.risk
																	}{" "}
																	RISK
																</span>
															</div>

															<ul className="space-y-1 text-body/80 text-xs">
																{candidate.notes.map(
																	(
																		note,
																		n,
																	) => (
																		<li
																			key={
																				n
																			}
																		>
																			•{" "}
																			{
																				note
																			}
																		</li>
																	),
																)}
															</ul>
														</div>
													);
												},
											)}
										</div>
									);
								}

								return null;
							})}
						</div>

						{/* INPUT moved into components/chatInput.tsx*/}
						<ChatInput value={input} onChange={setInput} onSend={sendMessage} />
					</>
				)}
			</main>
		</div>
	);
}

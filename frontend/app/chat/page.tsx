"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import { MessageSquare, Send } from "lucide-react";
import { Chat } from "@/src/models/Chat";
import { MOCK_CHAT_DATA } from "@/src/data/mockChatData";





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
								onClick={createNewChat}
								className="bg-accent text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition duration-200"
							>
								+ Start New Request
							</button>
						</div>
					</div>
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

						{/* INPUT */}
						<div className="bg-white border-t border-dark/10 p-4 flex items-center gap-4 fixed bottom-0 left-80 right-0">
							<input
								value={input}
								onChange={(e) => setInput(e.target.value)}
								placeholder="Describe your staffing needs..."
								className="flex-1 bg-background rounded-xl p-3 border border-dark/10 focus:outline-none"
							/>

							<button
								onClick={sendMessage}
								className="bg-primary text-white p-3 rounded-xl hover:opacity-90"
							>
								<Send className="w-5 h-5" />
							</button>
						</div>
					</>
				)}
			</main>
		</div>
	);
}

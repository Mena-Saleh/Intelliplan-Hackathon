// "use client";

// import { LayoutDashboard, MessageSquare, Users, Clock } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// type SidebarVariant = "customer" | "manager" | "consultant";

// type SidebarProps = {
// 	variant: SidebarVariant;
// 	user: {
// 		name: string;
// 		role: string;
// 	};
// };

// type Chat = {
// 	id: string;
// 	title: string;
// 	createdAt: Date;
// };

// export default function Sidebar({ variant, user }: SidebarProps) {
// 	const pathname = usePathname();

// 	// =========================
// 	// CUSTOMER CHAT STATE
// 	// =========================
// 	const [chats, setChats] = useState<Chat[]>([]); // <-- start EMPTY
// 	const [activeChatId, setActiveChatId] = useState<string | null>(null);

// 	// =========================
// 	// DATE FORMATTER
// 	// =========================
// 	const formatChatDate = (date: Date) => {
// 		const now = new Date();

// 		const isToday = date.toDateString() === now.toDateString();

// 		const isSameWeek =
// 			now.getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000;

// 		if (isToday) {
// 			return date.toLocaleTimeString([], {
// 				hour: "2-digit",
// 				minute: "2-digit",
// 			});
// 		}

// 		if (isSameWeek) {
// 			return date.toLocaleDateString([], { weekday: "short" });
// 		}

// 		return date.toLocaleDateString([], {
// 			day: "2-digit",
// 			month: "short",
// 			year: "numeric",
// 		});
// 	};

// 	// =========================
// 	// NEW CHAT HANDLER
// 	// =========================
// 	const handleNewChat = () => {
// 		const newChat: Chat = {
// 			id: Date.now().toString(),
// 			title: "New staffing request",
// 			createdAt: new Date(),
// 		};

// 		setChats((prev) => [newChat, ...prev]);
// 		setActiveChatId(newChat.id);
// 	};

// 	// =========================
// 	// NAV CONFIG
// 	// =========================
// 	const navConfig = {
// 		manager: [
// 			{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
// 		],
// 		consultant: [
// 			{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
// 			{ name: "Work History", href: "/history", icon: Clock },
// 		],
// 	};

// 	return (
// 		<aside className="fixed top-0 left-0 h-screen w-80 bg-surface flex flex-col border-r border-dark/10">
// 			{/* ===== Logo ===== */}
// 			<div className="leading-tight py-4 border-b border-dark/10 flex flex-col items-center">
// 				<h1 className="font-heading text-xl">
// 					<span className="text-primary">Intelli</span>
// 					<span className="text-body">plan</span>
// 				</h1>
// 				<p className="text-xs text-body/50 tracking-wide">
// 					AI-powered Staffing Portal
// 				</p>
// 			</div>

// 			{/* ========================= */}
// 			{/* CUSTOMER VIEW */}
// 			{/* ========================= */}
// 			{variant === "customer" && (
// 				<>
// 					{/* New Chat Button */}
// 					<div className="px-4 py-4 border-b border-dark/10">
// 						<button
// 							onClick={handleNewChat}
// 							className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
// 						>
// 							+ New Chat
// 						</button>
// 					</div>

// 					{/* ===== EMPTY STATE ===== */}
// 					{chats.length === 0 ? (
// 						<div className="flex-1 flex items-start justify-center text-center px-6 mt-6">
// 							<div>
// 								<p className="text-sm text-body/50">
// 									No conversations yet. Start a new chat!
// 								</p>
// 							</div>
// 						</div>
// 					) : (
// 						/* ===== CHAT LIST ===== */
// 						<div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
// 							{chats.map((chat) => {
// 								const isActive = activeChatId === chat.id;

// 								return (
// 									<div
// 										key={chat.id}
// 										onClick={() => setActiveChatId(chat.id)}
// 										className={`
//                       p-4 rounded-2xl cursor-pointer transition-all
//                       ${
// 							isActive
// 								? "bg-primary/10 shadow-sm"
// 								: "hover:bg-black/5"
// 						}
//                     `}
// 									>
// 										<div className="flex items-start gap-3">
// 											<MessageSquare className="w-5 h-5 text-primary shrink-0 mt-1" />

// 											<div>
// 												<p className="font-semibold text-body">
// 													{chat.title}
// 												</p>

// 												<div className="flex items-center gap-2 text-xs text-body/50 mt-1">
// 													<Clock className="w-3 h-3" />
// 													<span>
// 														{formatChatDate(
// 															chat.createdAt,
// 														)}
// 													</span>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								);
// 							})}
// 						</div>
// 					)}
// 				</>
// 			)}

// 			{/* ========================= */}
// 			{/* MANAGER / CONSULTANT NAV */}
// 			{/* ========================= */}
// 			{variant !== "customer" && (
// 				<div className="space-y-2 px-4 mt-4 flex-1">
// 					{navConfig[variant].map((item) => {
// 						const isActive = pathname.startsWith(item.href);
// 						const Icon = item.icon;

// 						return (
// 							<Link
// 								key={item.name}
// 								href={item.href}
// 								className={`
//                   flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer
//                   ${
// 						isActive
// 							? "bg-primary/10 text-primary shadow-sm"
// 							: "text-body hover:bg-black/5 hover:text-primary"
// 					}
//                 `}
// 							>
// 								<Icon className="w-5 h-5 shrink-0" />
// 								<span className="font-medium">{item.name}</span>
// 							</Link>
// 						);
// 					})}
// 				</div>
// 			)}

// 			{/* ===== Bottom User Section ===== */}
// 			<div className="border-t border-dark/10 p-4">
// 				<div className="flex items-center gap-3">
// 					<div className="bg-primary/10 text-primary p-2 rounded-full">
// 						<Users className="w-5 h-5" />
// 					</div>

// 					<div>
// 						<p className="text-sm font-semibold text-body">
// 							{user.name}
// 						</p>
// 						<p className="text-xs text-body/50">{user.role}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</aside>
// 	);
// }


"use client";

import { LayoutDashboard, MessageSquare, Users, Clock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarVariant = "customer" | "manager" | "consultant";

type Chat = {
	id: string;
	title: string;
	createdAt: Date;
};

type SidebarProps = {
	variant: SidebarVariant;
	chats?: Chat[];
	activeChatId?: string | null;
	onNewChat?: () => void;
	onSelectChat?: (id: string) => void;
	user: {
		name: string;
		role: string;
	};
};

export default function Sidebar({
	variant,
	chats = [],
	activeChatId = null,
	onNewChat,
	onSelectChat,
	user,
}: SidebarProps) {
	const pathname = usePathname();

	const formatDate = (date: Date) =>
		date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

	const navConfig = {
		manager: [
			{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
		],
		consultant: [
			{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
			{ name: "Work History", href: "/history", icon: Clock },
		],
	};

	return (
		<aside className="fixed top-0 left-0 h-screen w-80 bg-surface flex flex-col border-r border-dark/10">
			{/* ===== Logo ===== */}
			<div className="leading-tight py-4 border-b border-dark/10 flex flex-col items-center">
				<h1 className="font-heading text-xl">
					<span className="text-primary">Intelli</span>
					<span className="text-body">plan</span>
				</h1>
				<p className="text-xs text-body/50 tracking-wide">
					AI-powered Staffing Portal
				</p>
			</div>
		
			{/* ========================= */}
			{/* CUSTOMER SIDEBAR */}
			{/* ========================= */}
			{variant === "customer" && (
				<>
					<div className="px-4 py-4 border-b border-dark/10">
						<button
							onClick={onNewChat}
							className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
						>
							+ New Chat
						</button>
					</div>

					{chats.length === 0 ? (
						<div className="flex-1 px-6 pt-8 text-center">
							<p className="text-sm text-body/50">
								No conversations yet. Start a new chat!
							</p>
						</div>
					) : (
						<div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
							{chats.map((chat) => {
								const isActive = activeChatId === chat.id;

								return (
									<div
										key={chat.id}
										onClick={() => onSelectChat?.(chat.id)}
										className={`p-4 rounded-2xl cursor-pointer transition-all ${
											isActive
												? "bg-primary/10 shadow-sm"
												: "hover:bg-black/5"
										}`}
									>
										<div className="flex items-start gap-3">
											<MessageSquare className="w-5 h-5 text-primary mt-1" />
											<div>
												<p className="font-semibold">
													{chat.title}
												</p>
												<div className="flex items-center gap-2 text-xs text-body/50 mt-1">
													<Clock className="w-3 h-3" />
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
			)}
			{/* ========================= */}
			{/* MANAGER / CONSULTANT NAV */}
			{/* ========================= */}
			{variant !== "customer" && (
				<div className="space-y-2 px-4 mt-4 flex-1">
					{navConfig[variant].map((item) => {
						const isActive = pathname.startsWith(item.href);
						const Icon = item.icon;

						return (
							<Link
								key={item.name}
								href={item.href}
								className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
									isActive
										? "bg-primary/10 text-primary shadow-sm"
										: "text-body hover:bg-black/5 hover:text-primary"
								}`}
							>
								<Icon className="w-5 h-5 shrink-0" />
								<span className="font-medium">{item.name}</span>
							</Link>
						);
					})}
				</div>
			)}
			{/* ===== Bottom User Section ===== */}
			<div className="border-t border-dark/10 p-4">
				<div className="flex items-center gap-3">
					<div className="bg-primary/10 text-primary p-2 rounded-full">
						<Users className="w-5 h-5" />
					</div>
					<div>
						<p className="text-sm font-semibold">{user.name}</p>
						<p className="text-xs text-body/50">{user.role}</p>
					</div>
				</div>
			</div>
		</aside>
	);
}

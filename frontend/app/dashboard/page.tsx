"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import {
	Clock,
	CheckCircle,
	XCircle,
	AlertTriangle,
	Users,
	Activity,
	Circle,
	Check,
	Shield,
	ShieldAlert,
	ShieldCheck,
} from "lucide-react";

type Status = "pending" | "approved" | "rejected" | "bypassed";

type Consultant = {
	id: string;
	name: string;
	initials: string;
	risk: "low" | "medium" | "high";
	match: number;
};

type Request = {
	id: string;
	customer: string;
	role: string;
	date: string;
	location: string;
	description: string;
	status: Status;
};

export default function DashboardPage() {
	const [requests, setRequests] = useState<Request[]>([
		{
			id: "1",
			customer: "Johan Andersson",
			role: "Warehouse Worker",
			date: "2026-02-13 · 06:00–14:00",
			location: "Warehouse AB · Stockholm",
			description:
				"Sudden spike in deliveries tomorrow morning. Need 2 extra workers with forklift certification.",
			status: "pending",
		},
	]);

	const [selectedId, setSelectedId] = useState<string | null>(null);

	const consultants: Consultant[] = [
		{
			id: "1",
			name: "Erik Johansson",
			initials: "EJ",
			risk: "low",
			match: 100,
		},
		{
			id: "2",
			name: "Anders Nilsson",
			initials: "AN",
			risk: "medium",
			match: 68,
		},
		{
			id: "3",
			name: "Maria Svensson",
			initials: "MS",
			risk: "high",
			match: 59,
		},
	];

	const pending = requests.filter((r) => r.status === "pending").length;
	const approved = requests.filter((r) => r.status === "approved").length;
	const rejected = requests.filter((r) => r.status === "rejected").length;
	const bypassed = requests.filter((r) => r.status === "bypassed").length;

	const selectedRequest = requests.find((r) => r.id === selectedId);

	const approve = () => {
		setRequests((prev) =>
			prev.map((r) =>
				r.id === selectedId ? { ...r, status: "approved" } : r,
			),
		);
		setSelectedId(null);
	};

	const reject = () => {
		setRequests((prev) =>
			prev.map((r) =>
				r.id === selectedId ? { ...r, status: "rejected" } : r,
			),
		);
		setSelectedId(null);
	};

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar
				variant="manager"
				user={{ name: "Sara Lindqvist", role: "Staffing Agency" }}
			/>

			<main className="ml-80 flex-1 p-10">
				<h2 className="mb-1">Dashboard</h2>
				<p className="text-body/60 mb-8">
					Manage staffing requests and approvals
				</p>

				{/* Stats */}
				<div className="flex gap-6 mb-10">
					<Stat
						label="Pending"
						value={pending}
						color="#0098C3"
						icon={<Clock />}
					/>
					<Stat
						label="Approved"
						value={approved}
						color="#4DD07D"
						icon={<CheckCircle />}
					/>
					<Stat
						label="Rejected"
						value={rejected}
						color="#F26969"
						icon={<XCircle />}
					/>
					<Stat
						label="Bypassed"
						value={bypassed}
						color="#F7B23B"
						icon={<AlertTriangle />}
					/>
				</div>

				<h3 className="flex items-center gap-2 mb-4 text-primary">
					<Users className="w-6 h-6 text-primary" />
					Pending Approval
				</h3>

				{/* NO PENDING */}
				{pending === 0 && (
					<div className="bg-surface p-12 rounded-2xl border border-dark/10 text-center">
						<CheckCircle className="mx-auto mb-4 w-10 h-10 text-[#4DD07D]" />
						<p className="text-body/60">
							All caught up! No pending requests.
						</p>
					</div>
				)}

				{/* LIST VIEW */}
				{pending > 0 && !selectedRequest && (
					<div className="space-y-4">
						{requests
							.filter((r) => r.status === "pending")
							.map((req) => (
								<div
									key={req.id}
									onClick={() => setSelectedId(req.id)}
									className="bg-surface p-6 rounded-2xl border border-dark/10 cursor-pointer hover:shadow-md transition"
								>
									<div className="flex justify-between items-start">
										<div>
											<p className="font-semibold text-dark">
												{req.customer}
											</p>
											<p className="text-sm text-body/60">
												{req.role} · {req.date}
											</p>
											<p className="text-sm text-body/60">
												{req.location}
											</p>
										</div>

										<div className="flex items-center gap-2 bg-[#F26969]/10 text-[#F26969] px-3 py-1 rounded-full text-xs font-medium">
											<Circle
												className="w-2.5 h-2.5 fill-[#F26969]"
												strokeWidth={0}
											/>
											high urgency
										</div>
									</div>

									<p className="mt-4 text-body/80">
										{req.description}
									</p>

									<div className="flex gap-2 mt-4">
										<span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
											Forklift
										</span>
										<span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
											Warehouse Management
										</span>
									</div>
								</div>
							))}
					</div>
				)}

				{/* EXPANDED VIEW */}
				{selectedRequest && (
					<div className="bg-surface rounded-2xl border border-dark/10 overflow-hidden">
						{/* Request Info */}
						<div className="p-6 border-b border-dark/10">
							<div className="flex justify-between items-start">
								<div>
									<p className="font-semibold text-dark">
										{selectedRequest.customer}
									</p>
									<p className="text-sm text-body/60">
										{selectedRequest.role} ·{" "}
										{selectedRequest.date}
									</p>
									<p className="text-sm text-body/60">
										{selectedRequest.location}
									</p>
								</div>

								<span className="bg-[#F26969]/10 text-[#F26969] text-xs px-3 py-1 rounded-full">
									high urgency
								</span>
							</div>

							<p className="mt-4 text-body/80">
								{selectedRequest.description}
							</p>

							<div className="flex gap-2 mt-4">
								<span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
									Forklift
								</span>
								<span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
									Warehouse Management
								</span>
							</div>
						</div>

						{/* AI Suggested */}
						<div className="p-6 bg-[#FBFCFE]">
							<h4 className="mb-6 text-primary font-semibold">
								AI-Suggested Consultants
							</h4>

							<div className="space-y-4">
								{consultants.map((c) => (
									<div
										key={c.id}
										className="border border-dark/10 bg-surface p-6 rounded-xl flex justify-between"
									>
										{/* LEFT */}
										<div className="flex gap-4">
											<div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
												{c.initials}
											</div>

											<div className="space-y-2">
												<div>
													<p className="font-semibold text-dark">
														{c.name}
													</p>

													<p className="text-sm text-body/60">
														Rating: 4.5/5 · Match{" "}
														{c.match}%
													</p>
												</div>

												{/* Description */}
												<p className="text-sm text-body/70">
													{c.risk === "low"
														? "Has all required competences and prior experience with this customer."
														: c.risk === "medium"
															? "Has all required competences but no prior experience with this customer."
															: "Missing required competence(s): Warehouse Management"}
												</p>

												{/* Skill Tags */}
												<div className="flex gap-2 flex-wrap pt-1">
													<span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
														Forklift
													</span>
													<span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
														Warehouse Management
													</span>
													{c.risk === "high" && (
														<span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
															Quality Control
														</span>
													)}
												</div>
											</div>
										</div>
										{/* RIGHT */}
										<div className="flex flex-col justify-between items-end">
											{/* Risk Badge */}
											<span
												className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full ${
													c.risk === "low"
														? "bg-[#4DD07D]/15 text-[#4DD07D]"
														: c.risk === "medium"
															? "bg-[#F7B23B]/15 text-[#F7B23B]"
															: "bg-[#F26969]/15 text-[#F26969]"
												}`}
											>
												{c.risk === "low" && (
													<ShieldCheck className="w-3.5 h-3.5" />
												)}
												{c.risk === "medium" && (
													<Shield className="w-3.5 h-3.5" />
												)}
												{c.risk === "high" && (
													<ShieldAlert className="w-3.5 h-3.5" />
												)}

												{c.risk === "low"
													? "Low Risk"
													: c.risk === "medium"
														? "Medium Risk"
														: "High Risk"}
											</span>

											{/* Approve Button */}
											<button
												onClick={approve}
												className="bg-[#4DD07D] text-white px-6 py-2.5 rounded-xl flex items-center gap-3 font-bold hover:opacity-90"
											>
												<div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
													<Check className="w-3.5 h-3.5" />
												</div>
												Approve
											</button>
										</div>
									</div>
								))}
							</div>

							<button
								onClick={reject}
								className="mt-6 border border-[#F26969] text-[#F26969] px-6 py-2 rounded-xl hover:bg-[#F26969]/5"
							>
								Reject Request
							</button>
						</div>
					</div>
				)}

				{/* Recent Activity */}
				<div>
					<h3 className="mt-12 mb-4 flex items-center gap-2 text-primary">
						<Activity className="w-5 h-5" />
						Recent Activity
					</h3>

					{requests.filter((r) => r.status !== "pending").length ===
						0 && (
						<p className="text-body/60">
							No processed requests yet.
						</p>
					)}

					<div className="space-y-3">
						{requests
							.filter((r) => r.status !== "pending")
							.map((r) => (
								<div
									key={r.id}
									className="bg-surface p-4 rounded-xl border border-dark/10 flex justify-between items-center"
								>
									<div>
										<p className="font-semibold">
											{r.customer} – {r.role}
										</p>
										<p className="text-sm text-body/60">
											{r.date} · {r.location}
										</p>
									</div>

									<span
										className={`flex items-center gap-2 whitespace-nowrap text-sm px-4 py-1.5 rounded-full font-medium ${
											r.status === "approved"
												? "bg-[#4DD07D]/15 text-[#4DD07D]"
												: r.status === "rejected"
													? "bg-[#F26969]/15 text-[#F26969]"
													: "bg-[#F7B23B]/15 text-[#F7B23B]"
										}`}
									>
										{r.status === "approved" && (
											<CheckCircle className="w-4 h-4" />
										)}
										{r.status === "rejected" && (
											<XCircle className="w-4 h-4" />
										)}
										{r.status === "bypassed" && (
											<AlertTriangle className="w-4 h-4" />
										)}

										{r.status.charAt(0).toUpperCase() +
											r.status.slice(1)}
									</span>
								</div>
							))}
					</div>
				</div>
				
			</main>
		</div>
	);
}

function Stat({
	label,
	value,
	color,
	icon,
}: {
	label: string;
	value: number;
	color: string;
	icon: React.ReactNode;
}) {
	return (
		<div className="bg-surface px-6 py-5 rounded-2xl border border-dark/10 w-44 flex justify-between items-center">
			<div>
				<p className="text-sm text-body/70 mb-2">{label}</p>
				<p className="text-2xl font-semibold">{value}</p>
			</div>
			<div style={{ color }} className="text-xl">
				{icon}
			</div>
		</div>
	);
}

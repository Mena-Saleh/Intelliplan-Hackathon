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



// type Consultant = {
// 	id: string;
// 	name: string;
// 	initials: string;
// 	risk: "low" | "medium" | "high";
// 	match: number;
// };

// type Request = {
// 	id: string;
// 	customer: string;
// 	role: string;
// 	date: string;
// 	location: string;
// 	description: string;
// 	status: Status;
// };

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
				user={{ name: "Johan Andersson", role: "Warehouse AB" }}
			/>

			<main className="ml-80 flex-1 p-10">
				<h2 className="mb-1">Dashboard</h2>
				<p className="text-body/60 mb-8">
					Manage staffing requests and approvals
				</p>
				
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

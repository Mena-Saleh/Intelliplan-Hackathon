"use client";

import Sidebar from "@/src/components/sidebar";
import SidebarNav from "@/src/components/sidebar-nav";
import { Clock, Star, CheckCircle, XCircle } from "lucide-react";

export default function ConsultantDashboardPage() {
	const newShiftOffers = [
		{
			id: 1,
			role: "Warehouse Worker",
			date: "13 Feb 2026",
			time: "06:00–14:00",
			location: "Stockholm",
		},
	];

	const confirmedShifts = [
		{
			id: 1,
			role: "Warehouse Worker",
			date: "18 Feb 2026",
			time: "08:00–16:00",
			location: "Stockholm",
		},
	];

	const stats = {
		shifts: 12,
		hours: 96,
		rating: 4.8,
	};

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar user={{ name: "Hanna Larsson", role: "Consultant" }}>
				<SidebarNav variant="consultant" />
			</Sidebar>

			<main className="ml-80 flex-1 p-8 space-y-8">
				{/* ===== HERO CARD ===== */}
				<div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-3xl shadow-md">
					<h2 className="!text-white">
						Welcome back, Hanna 👋
					</h2>
					<p className="text-white/80 mt-2">
						Stay on top of your shifts and opportunities.
					</p>
				</div>

				{/* ===== STATS ===== */}
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
						<p className="text-3xl font-bold text-primary">
							{stats.shifts}
						</p>
						<p className="text-sm text-body/60 mt-1">
							Total Shifts
						</p>
					</div>

					<div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
						<p className="text-3xl font-bold text-primary">
							{stats.hours}h
						</p>
						<p className="text-sm text-body/60 mt-1">
							Hours Worked
						</p>
					</div>

					<div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
						<p className="text-3xl font-bold text-primary">
							{stats.rating}
						</p>
						<p className="text-sm text-body/60 mt-1">
							Average Rating
						</p>
					</div>
				</div>

				{/* ===== CONTENT GRID ===== */}
				<div className="grid lg:grid-cols-2 gap-8">
					{/* NEW OFFERS */}
					<div className="bg-surface border border-dark/10 rounded-2xl p-6 space-y-4">
						<h3 className="font-semibold text-primary flex items-center gap-2">
							<Clock className="w-4 h-4" />
							New Shift Offers
						</h3>

						{newShiftOffers.length === 0 ? (
							<p className="text-sm text-body/60">
								No new shift offers available.
							</p>
						) : (
							newShiftOffers.map((shift) => (
								<div
									key={shift.id}
									className="bg-background border border-dark/10 rounded-xl p-5 space-y-3"
								>
									<div>
										<p className="font-semibold">
											{shift.role}
										</p>
										<p className="text-sm text-body/60">
											{shift.date} · {shift.time} ·{" "}
											{shift.location}
										</p>
									</div>

									<div className="flex gap-3">
										<button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
											<CheckCircle className="w-4 h-4" />
											Accept
										</button>

										<button className="flex items-center gap-2 border border-dark/20 px-4 py-2 rounded-lg text-sm hover:bg-dark/5">
											<XCircle className="w-4 h-4" />
											Decline
										</button>
									</div>
								</div>
							))
						)}
					</div>

					{/* CONFIRMED SHIFTS */}
					<div className="bg-surface border border-dark/10 rounded-2xl p-6 space-y-4">
						<h3 className="font-semibold text-primary">
							Confirmed Shifts
						</h3>

						{confirmedShifts.length === 0 ? (
							<p className="text-sm text-body/60">
								No confirmed shifts yet.
							</p>
						) : (
							confirmedShifts.map((shift) => (
								<div
									key={shift.id}
									className="bg-primary/5 rounded-xl p-5 border border-primary/10"
								>
									<p className="font-semibold">
										{shift.role}
									</p>
									<p className="text-sm text-body/60">
										{shift.date} · {shift.time} ·{" "}
										{shift.location}
									</p>
								</div>
							))
						)}
					</div>
				</div>
			</main>
		</div>
	);
}
"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import {
	Bell,
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

interface Customer {
	id: number;
	name: string;
	role: string;
	department: Department;
}

// TODO: Breakout consultant into an interface, create a list of said consultant here
interface Department {
	competences: string[];
	preferredConsultants: string[];
}

const customer: Customer =
	{
		id: 1,
		name: "Johan Andersson",
		role: "Warehouse AB",
		department: {
			competences: ["logistics", "customer relations"],
			preferredConsultants: ["Hanna", "Kevin"]
		}
	}


export default function DashboardPage() {


	

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar
				variant="customer"
				user={{ name: customer.name, role: customer.role }}
			/>

			<main className="ml-80 flex-1 p-10">
				<h1 className="mb-1">Dashboard</h1>
				<p className="text-body/60 mb-8">
					Manage staffing requests and approvals
				</p>

				<section className="space-y-5 p-6 rounded-2xl bg bg-gradient-to-br from-[hsla(205,60%,50%,1)] to-[hsla(150,40%,60%,1)]
">
					<h2 className="!text-white">Welcome {customer.name}!</h2>
					<p className="text-white">Here is an overview of recent activities:</p>
				</section>


				<section className="space-y-5 mt-10">

					<h3 className="flex items-center gap-2 mb-4 text-primary">
						<Check className="w-6 h-6 text-primary" />
						Booked Shifts
					</h3>

					<div className="flex justify-center p-5 bg-white rounded">
						<span className="text-gray-400">No active shifts...</span>
					</div>
				</section>

				
				<section className="space-y-5 mt-10">

					<h3 className="flex items-center gap-2 mb-4 text-primary">
						<Bell className="w-6 h-6 text-primary" />
						Notifications
					</h3>

					<div className="flex justify-center p-5 bg-white rounded">
						<span className="text-gray-400">No new notifications...</span>
					</div>
				</section>
			</main>
		</div>
	);
}



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

interface Customer {
	id: number;
	name: string;
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
				user={{ name: "Johan Andersson", role: "Warehouse AB" }}
			/>

			<main className="ml-80 flex-1 p-10">
				<h1 className="mb-1">Dashboard</h1>
				<p className="text-body/60 mb-8">
					Manage staffing requests and approvals
				</p>

				<section>
					<h2>Welcome</h2>
				</section>
				
			</main>
		</div>
	);
}



"use client";

import { useState } from "react";
import Sidebar from "@/src/components/sidebar";
import SidebarNav from "@/src/components/sidebar-nav";
import { User, MapPin, Calendar, Clock, Plus, Check, X } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function ProfilePage() {
	/* ================= STATE ================= */

	const [email, setEmail] = useState("hanna.larsson@email.com");
	const [phone, setPhone] = useState("+46 70 123 4567");

	const [locations, setLocations] = useState(["Stockholm", "Solna"]);
	const [newLocation, setNewLocation] = useState("");

	const locationSuggestions = [
		"Stockholm",
		"Solna",
		"Sundbyberg",
		"Uppsala",
		"Västerås",
		"Örebro",
		"Linköping",
		"Norrköping",
		"Gothenburg",
		"Malmö",
		"Lund",
		"Helsingborg",
		"Jönköping",
		"Borås",
		"Eskilstuna",
		"Karlstad",
		"Växjö",
		"Gävle",
		"Falun",
		"Södertälje",
		"Täby",
		"Lidingö",
		"Nacka",
		"Haninge",
	];

	const [competences, setCompetences] = useState([
		"Forklift Operator",
		"Warehouse Worker",
		"Order Picker",
		"Machine Operator",
		"Truck Driver",
		"Quality Control",
		"Team Lead",
		"Inventory Management",
		"Logistics Planning",
		"Safety Compliance",
	]);

	const [selectedCompetences, setSelectedCompetences] = useState<string[]>(
		[],
	);

	const [newCompetence, setNewCompetence] = useState("");

	const [selectedDates, setSelectedDates] = useState<Date[]>([]);

	const timeSlots = [
		"06:00 – 10:00",
		"08:00 – 12:00",
		"10:00 – 14:00",
		"12:00 – 16:00",
		"14:00 – 18:00",
		"16:00 – 20:00",
		"18:00 – 22:00",
	];

	/* ================= FUNCTIONS ================= */

	const addLocation = () => {
		if (!newLocation.trim()) return;
		if (locations.includes(newLocation)) return;
		setLocations([...locations, newLocation]);
		setNewLocation("");
	};

	const removeLocation = (loc: string) => {
		setLocations(locations.filter((l) => l !== loc));
	};

	const addCompetence = () => {
		if (!newCompetence.trim()) return;
		if (competences.includes(newCompetence)) return;
		setCompetences([...competences, newCompetence]);
		setNewCompetence("");
	};

	const toggleCompetence = (c: string) => {
		setSelectedCompetences((prev) =>
			prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
		);
	};

	/* ================= UI ================= */

	return (
		<div className="flex min-h-screen bg-background">
			<Sidebar user={{ name: "Hanna Larsson", role: "Consultant" }}>
				<SidebarNav variant="consultant" />
			</Sidebar>

			<main className="ml-80 flex-1 p-6 md:p-10">
				{/* HEADER */}
				<div className="bg-linear-to-r from-primary to-secondary text-white p-6 rounded-2xl mb-8">
					<h2 className="!text-white">My Profile & Availability</h2>
					<p className="text-white/80 text-sm mt-1">
						Manage your schedule, competences, and preferred
						locations.
					</p>
				</div>

				{/* ================= TOP GRID ================= */}
				<div className="grid md:grid-cols-2 gap-6 mb-6">
					{/* PERSONAL */}
					<div className="bg-surface border border-dark/10 rounded-2xl p-6">
						<h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
							<User className="w-4 h-4 text-primary" />
							Personal Information
						</h3>

						<div className="mb-4">
							<label className="block text-sm mb-1 text-body/70">
								Full Name
							</label>
							<input
								value="Hanna Larsson"
								readOnly
								className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm bg-dark/5"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-sm mb-1 text-body/70">
								Email
							</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20"
							/>
						</div>

						<div>
							<label className="block text-sm mb-1 text-body/70">
								Phone
							</label>
							<input
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20"
							/>
						</div>
					</div>

					{/* LOCATIONS */}
					<div className="bg-surface border border-dark/10 rounded-2xl p-6">
						<h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
							<MapPin className="w-4 h-4 text-primary" />
							Preferred Locations
						</h3>

						<div className="flex flex-wrap gap-2 mb-4">
							{locations.map((loc) => (
								<span
									key={loc}
									className="flex items-center gap-1 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
								>
									{loc}
									<X
										className="w-3 h-3 cursor-pointer"
										onClick={() => removeLocation(loc)}
									/>
								</span>
							))}
						</div>

						<input
							list="locations"
							value={newLocation}
							onChange={(e) => setNewLocation(e.target.value)}
							placeholder="Add location..."
							className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm mb-3"
						/>

						<datalist id="locations">
							{locationSuggestions.map((loc) => (
								<option key={loc} value={loc} />
							))}
						</datalist>

						<button
							onClick={addLocation}
							className="border border-dark/10 rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-black/5"
						>
							<Plus size={16} /> Add Location
						</button>
					</div>
				</div>

				{/* ================= COMPETENCES ================= */}
				<div className="grid md:grid-cols-2 gap-6 mb-6">
					<div className="bg-surface border border-dark/10 rounded-2xl p-6">
						<h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
							<Check className="w-4 h-4 text-primary" />
							My Competences
						</h3>

						<div className="space-y-3">
							{competences.map((c) => (
								<label
									key={c}
									className="flex items-center gap-3 text-sm cursor-pointer"
								>
									<input
										type="checkbox"
										checked={selectedCompetences.includes(
											c,
										)}
										onChange={() => toggleCompetence(c)}
										className="accent-primary w-4 h-4"
									/>
									{c}
								</label>
							))}
						</div>

						<div className="flex gap-2 mt-6">
							<input
								value={newCompetence}
								onChange={(e) =>
									setNewCompetence(e.target.value)
								}
								placeholder="Add custom competence..."
								className="flex-1 border border-dark/10 rounded-xl px-3 py-2 text-sm"
							/>
							<button
								onClick={addCompetence}
								className="border border-dark/10 rounded-xl px-3 hover:bg-black/5"
							>
								<Plus size={16} />
							</button>
						</div>
					</div>

					{/* TIME SLOTS */}
					<div className="bg-surface border border-dark/10 rounded-2xl p-6">
						<h3 className="flex items-center gap-2 font-semibold mb-6 text-primary">
							<Clock className="w-4 h-4 text-primary" />
							Preferred Time Slots
						</h3>

						<div className="space-y-4">
							{timeSlots.map((slot) => (
								<label
									key={slot}
									className="flex items-center gap-3 text-sm cursor-pointer"
								>
									<input
										type="checkbox"
										className="accent-primary w-4 h-4"
									/>
									{slot}
								</label>
							))}
						</div>
					</div>
				</div>

				{/* ================= CALENDAR ================= */}
				<div className="bg-surface border border-dark/10 rounded-2xl p-6 mb-8">
					<h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
						<Calendar className="w-4 h-4 text-primary" />
						Available Dates
					</h3>

					
					<DayPicker
						mode="multiple"
						selected={selectedDates}
						onSelect={(dates) => setSelectedDates(dates || [])}
						style={
							{
								"--rdp-accent-color": "var(--color-primary)",
								"--rdp-background-color": "var(--color-accent)",
							} as React.CSSProperties
						}
						classNames={{
							caption_label: "text-primary",
							nav_button:
								"text-primary hover:bg-primary/10 rounded-lg p-2 transition",
							day: "rounded-lg transition-colors",
							day_selected:
								"!bg-accent !text-white rounded-lg font-medium",
							day_today: "!text-primary font-semibold",
							day_outside: "text-body/30",
						}}
					/>
				</div>

				{/* SAVE */}
				<div className="flex justify-end">
					<button className="bg-accent text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90">
						Save Profile
					</button>
				</div>
			</main>
		</div>
	);
}

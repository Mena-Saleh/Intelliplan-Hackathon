import { useState } from "react";

export function useProfile() {
	/* ================= BASIC INFO ================= */

	const [email, setEmail] = useState("hanna.larsson@email.com");
	const [phone, setPhone] = useState("+46 70 123 4567");

	/* ================= DATES ================= */

	const [selectedDates, setSelectedDates] = useState<Date[]>([]);

	/* ================= LOCATIONS ================= */

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

	const addLocation = () => {
		if (!newLocation.trim()) return;
		if (locations.includes(newLocation)) return;
		setLocations([...locations, newLocation]);
		setNewLocation("");
	};

	const removeLocation = (loc: string) => {
		setLocations(locations.filter((l) => l !== loc));
	};

	/* ================= COMPETENCES ================= */

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

	/* ================= RETURN ================= */

	return {
		email,
		setEmail,
		phone,
		setPhone,

		selectedDates,
		setSelectedDates,

		locations,
		newLocation,
		setNewLocation,
		locationSuggestions,
		addLocation,
		removeLocation,

		competences,
		selectedCompetences,
		newCompetence,
		setNewCompetence,
		addCompetence,
		toggleCompetence,
	};
}

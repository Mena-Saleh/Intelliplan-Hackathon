"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import SidebarNav from "@/components/sidebar/sidebar-nav";

import ProfileHeader from "@/components/consultant/profile/profile-header";
import PersonalInfoCard from "@/components/consultant/profile/personal-info-card";
import LocationsCard from "@/components/consultant/profile/locations-card";
import CompetencesCard from "@/components/consultant/profile/competences-card";
import TimeSlotsCard from "@/components/consultant/profile/time-slots-card";
import AvailabilityCalendarCard from "@/components/consultant/profile/availability-calendar-card";

import {
  MOCK_LOCATION_SUGGESTIONS,
  MOCK_INITIAL_LOCATIONS,
  MOCK_COMPETENCES,
  MOCK_TIME_SLOTS,
} from "@/data/mock-consultant-data";

export default function ProfilePage() {
  const [email, setEmail] = useState("hanna.larsson@email.com");
  const [phone, setPhone] = useState("+46 70 123 4567");

  const [locations, setLocations] = useState(MOCK_INITIAL_LOCATIONS);
  const [newLocation, setNewLocation] = useState("");

  const [competences, setCompetences] = useState(
    MOCK_COMPETENCES.map((c) => c.name),
  );

  const [selectedCompetences, setSelectedCompetences] = useState<string[]>([]);

  const [newCompetence, setNewCompetence] = useState("");

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

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

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar user={{ name: "Hanna Larsson", role: "Consultant" }}>
        <SidebarNav variant="consultant" />
      </Sidebar>

      <main className="ml-80 flex-1 p-6 md:p-10">
        <ProfileHeader />

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <PersonalInfoCard
            email={email}
            phone={phone}
            onEmailChange={setEmail}
            onPhoneChange={setPhone}
          />

          <LocationsCard
            locations={locations}
            newLocation={newLocation}
            suggestions={MOCK_LOCATION_SUGGESTIONS.map((l) => l.name)}
            onNewLocationChange={setNewLocation}
            onAdd={addLocation}
            onRemove={removeLocation}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <CompetencesCard
            competences={competences}
            selected={selectedCompetences}
            newCompetence={newCompetence}
            onToggle={toggleCompetence}
            onNewChange={setNewCompetence}
            onAdd={addCompetence}
          />

          <TimeSlotsCard slots={MOCK_TIME_SLOTS.map((s) => s.label)} />
        </div>

        <AvailabilityCalendarCard
          selectedDates={selectedDates}
          onSelect={setSelectedDates}
        />

        <div className="flex justify-end">
          <button className="bg-accent text-white px-6 py-2.5 rounded-xl font-medium hover:opacity-90">
            Save Profile
          </button>
        </div>
      </main>
    </div>
  );
}

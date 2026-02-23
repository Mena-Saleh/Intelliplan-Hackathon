"use client";

import Sidebar from "@/components/sidebar/sidebar";
import SidebarNav from "@/components/sidebar/sidebar-nav";
import HeroCard from "@/components/consultant/hero-card";
import StatsGrid from "@/components/consultant/stats-grid";
import ShiftOffersCard from "@/components/consultant/shift-offers-card";
import ConfirmedShiftsCard from "@/components/consultant/confirmed-shifts-card";

import {
  MOCK_NEW_SHIFT_OFFERS,
  MOCK_CONFIRMED_SHIFTS,
  MOCK_CONSULTANT_STATS,
} from "@/data/mock-consultant-data";

export default function ConsultantDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar user={{ name: "Hanna Larsson", role: "Consultant" }}>
        <SidebarNav variant="consultant" />
      </Sidebar>

      <main className="ml-80 flex-1 p-8 space-y-8">
        <HeroCard name="Hanna" />

        <StatsGrid stats={MOCK_CONSULTANT_STATS} />

        <div className="grid lg:grid-cols-2 gap-8">
          <ShiftOffersCard shifts={MOCK_NEW_SHIFT_OFFERS} />
          <ConfirmedShiftsCard shifts={MOCK_CONFIRMED_SHIFTS} />
        </div>
      </main>
    </div>
  );
}

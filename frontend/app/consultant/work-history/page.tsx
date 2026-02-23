"use client";

import Sidebar from "@/components/sidebar/sidebar";
import SidebarNav from "@/components/sidebar/sidebar-nav";
import { Star } from "lucide-react";
import { MOCK_PAST_SHIFTS } from "@/data/mock-consultant-data";

export default function ConsultantWorkHistoryPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar user={{ name: "Hanna Larsson", role: "Consultant" }}>
        <SidebarNav variant="consultant" />
      </Sidebar>

      <main className="ml-80 flex-1 p-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-primary">Work History</h2>
          <p className="text-sm text-body/60 mt-1">
            Overview of your completed shifts and performance.
          </p>
        </div>

        <div className="bg-surface border border-dark/10 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-5 bg-primary/5 text-sm font-medium px-6 py-4 text-body/70">
            <span>Role</span>
            <span>Company</span>
            <span>Date</span>
            <span>Hours</span>
            <span className="text-right">Rating</span>
          </div>

          {MOCK_PAST_SHIFTS.map((shift) => (
            <div
              key={shift.id}
              className="grid grid-cols-5 items-center px-6 py-4 border-t border-dark/10 text-sm"
            >
              <span className="font-medium">{shift.role}</span>
              <span className="text-body/60">{shift.company}</span>
              <span className="text-body/60">{shift.date}</span>
              <span className="text-body/60">{shift.hours}h</span>

              <div className="flex justify-end gap-1 text-accent">
                {[...Array(shift.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

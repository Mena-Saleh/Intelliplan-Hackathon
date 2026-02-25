"use client";

import type { TConsultantStats } from "@/types/consultant";

interface TProps {
  stats: TConsultantStats;
}

export default function StatsGrid({ stats }: TProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
        <p className="text-3xl font-bold text-primary">{stats.shifts}</p>
        <p className="text-sm text-body/60 mt-1">Total Shifts</p>
      </div>

      <div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
        <p className="text-3xl font-bold text-primary">{stats.hours}h</p>
        <p className="text-sm text-body/60 mt-1">Hours Worked</p>
      </div>

      <div className="bg-surface border border-dark/10 rounded-2xl p-6 text-center">
        <p className="text-3xl font-bold text-primary">{stats.rating}</p>
        <p className="text-sm text-body/60 mt-1">Average Rating</p>
      </div>
    </div>
  );
}

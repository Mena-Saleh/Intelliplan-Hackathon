"use client";

import { Clock } from "lucide-react";

interface TProps {
  slots: string[];
}

export default function TimeSlotsCard({ slots }: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-semibold mb-6 text-primary">
        <Clock className="w-4 h-4 text-primary" />
        Preferred Time Slots
      </h3>

      <div className="space-y-4">
        {slots.map((slot) => (
          <label
            key={slot}
            className="flex items-center gap-3 text-sm cursor-pointer"
          >
            <input type="checkbox" className="accent-primary w-4 h-4" />
            {slot}
          </label>
        ))}
      </div>
    </div>
  );
}

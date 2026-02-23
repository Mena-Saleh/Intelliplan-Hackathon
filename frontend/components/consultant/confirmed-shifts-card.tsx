"use client";

import type { TShift } from "@/types/consultant";

interface TProps {
  shifts: TShift[];
}

export default function ConfirmedShiftsCard({ shifts }: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6 space-y-4">
      <h3 className="font-semibold text-primary">Confirmed Shifts</h3>

      {shifts.length === 0 ? (
        <p className="text-sm text-body/60">No confirmed shifts yet.</p>
      ) : (
        shifts.map((shift) => (
          <div
            key={shift.id}
            className="bg-primary/5 rounded-xl p-5 border border-primary/10"
          >
            <p className="font-semibold">{shift.role}</p>
            <p className="text-sm text-body/60">
              {shift.date} · {shift.time} · {shift.location}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

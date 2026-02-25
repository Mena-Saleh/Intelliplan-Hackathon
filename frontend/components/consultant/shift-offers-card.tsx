"use client";

import { Clock, CheckCircle, XCircle } from "lucide-react";
import type { TShift } from "@/types/consultant";

interface TProps {
  shifts: TShift[];
}

export default function ShiftOffersCard({ shifts }: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6 space-y-4">
      <h3 className="font-semibold text-primary flex items-center gap-2">
        <Clock className="w-4 h-4" />
        New Shift Offers
      </h3>

      {shifts.length === 0 ? (
        <p className="text-sm text-body/60">No new shift offers available.</p>
      ) : (
        shifts.map((shift) => (
          <div
            key={shift.id}
            className="bg-background border border-dark/10 rounded-xl p-5 space-y-3"
          >
            <div>
              <p className="font-semibold">{shift.role}</p>
              <p className="text-sm text-body/60">
                {shift.date} · {shift.time} · {shift.location}
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm hover:opacity-90">
                <CheckCircle className="w-4 h-4" />
                Accept
              </button>

              <button className="flex items-center gap-2 border border-dark/20 px-4 py-2 rounded-lg text-sm hover:bg-dark/5">
                <XCircle className="w-4 h-4" />
                Decline
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

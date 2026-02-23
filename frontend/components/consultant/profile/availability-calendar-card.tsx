"use client";

import { Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import type { CSSProperties } from "react";
import "react-day-picker/dist/style.css";

interface TProps {
  selectedDates: Date[];
  onSelect: (dates: Date[]) => void;
}

export default function AvailabilityCalendarCard({
  selectedDates,
  onSelect,
}: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6 mb-8">
      <h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
        <Calendar className="w-4 h-4 text-primary" />
        Available Dates
      </h3>

      <DayPicker
        mode="multiple"
        selected={selectedDates}
        onSelect={(dates) => onSelect(dates || [])}
        style={
          {
            "--rdp-accent-color": "var(--color-primary)",
            "--rdp-background-color": "var(--color-accent)",
          } as CSSProperties
        }
        classNames={{
          caption_label: "text-primary",
          nav_button:
            "text-primary hover:bg-primary/10 rounded-lg p-2 transition",
          day: "rounded-lg transition-colors",
          day_selected: "!bg-accent !text-white rounded-lg font-medium",
          day_today: "!text-primary font-semibold",
          day_outside: "text-body/30",
        }}
      />
    </div>
  );
}

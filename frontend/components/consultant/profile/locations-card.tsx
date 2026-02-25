"use client";

import { MapPin, Plus, X } from "lucide-react";

interface TProps {
  locations: string[];
  newLocation: string;
  suggestions: string[];
  onNewLocationChange: (v: string) => void;
  onAdd: () => void;
  onRemove: (loc: string) => void;
}

export default function LocationsCard({
  locations,
  newLocation,
  suggestions,
  onNewLocationChange,
  onAdd,
  onRemove,
}: TProps) {
  return (
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
              onClick={() => onRemove(loc)}
            />
          </span>
        ))}
      </div>

      <input
        list="locations"
        value={newLocation}
        onChange={(e) => onNewLocationChange(e.target.value)}
        placeholder="Add location..."
        className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm mb-3"
      />

      <datalist id="locations">
        {suggestions.map((loc) => (
          <option key={loc} value={loc} />
        ))}
      </datalist>

      <button
        onClick={onAdd}
        className="border border-dark/10 rounded-xl px-4 py-2 flex items-center gap-2 hover:bg-black/5"
      >
        <Plus size={16} /> Add Location
      </button>
    </div>
  );
}

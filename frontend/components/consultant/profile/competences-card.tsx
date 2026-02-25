"use client";

import { Check, Plus } from "lucide-react";

interface TProps {
  competences: string[];
  selected: string[];
  newCompetence: string;
  onToggle: (c: string) => void;
  onNewChange: (v: string) => void;
  onAdd: () => void;
}

export default function CompetencesCard({
  competences,
  selected,
  newCompetence,
  onToggle,
  onNewChange,
  onAdd,
}: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
        <Check className="w-4 h-4 text-primary" />
        My Competences
      </h3>

      <div className="space-y-3">
        {competences.map((c) => (
          <label
            key={c}
            className="flex items-center gap-3 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(c)}
              onChange={() => onToggle(c)}
              className="accent-primary w-4 h-4"
            />
            {c}
          </label>
        ))}
      </div>

      <div className="flex gap-2 mt-6">
        <input
          value={newCompetence}
          onChange={(e) => onNewChange(e.target.value)}
          placeholder="Add custom competence..."
          className="flex-1 border border-dark/10 rounded-xl px-3 py-2 text-sm"
        />
        <button
          onClick={onAdd}
          className="border border-dark/10 rounded-xl px-3 hover:bg-black/5"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

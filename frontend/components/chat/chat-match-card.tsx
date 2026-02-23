"use client";

import { Star } from "lucide-react";
import { getMockupDisplayName } from "@/utils/get-mockup-display-name";
import { TMatchCandidate } from "@/types/chat";

type Props = {
  candidates: TMatchCandidate[];
};

export default function ChatMatchCard({ candidates }: Props) {
  return (
    <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-sm border border-dark/10 space-y-6">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">
          Top Recommended Consultants
        </p>

        <div className="relative group">
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
            Send Request To
          </button>

          <div className="absolute right-0 w-44 bg-white border border-dark/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-background">
              All
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-background">
              Low Risk Only
            </button>
          </div>
        </div>
      </div>

      {candidates.map((candidate, i) => {
        const riskColor =
          candidate.risk === "LOW"
            ? "bg-green-100 text-green-700"
            : candidate.risk === "MEDIUM"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700";

        return (
          <div
            key={i}
            className="p-4 rounded-xl bg-background border border-dark/10 space-y-4 flex flex-col"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-lg">
                  {getMockupDisplayName(candidate.id)}
                </p>

                {candidate.rating && (
                  <p className="text-sm text-body/70">
                    <Star className="inline w-4 h-4 text-yellow-500 mr-1" />
                    Rating: {candidate.rating}
                  </p>
                )}
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${riskColor}`}
              >
                {candidate.risk} RISK
              </span>
            </div>

            <p className="text-sm text-body/80">
              {candidate.riskReason}
            </p>

            <div>
              <p className="text-sm font-medium">
                Competences:
              </p>
              <ul className="text-xs text-body/70 space-y-1">
                {candidate.competences.map((comp, idx) => (
                  <li key={idx}>• {comp}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-medium">
                Customer Experience:
              </p>
              <ul className="text-xs text-body/70 space-y-1">
                {candidate.customerExperience.map((exp, idx) => (
                  <li key={idx}>• {exp}</li>
                ))}
              </ul>
            </div>

            <button className="bg-primary text-white text-xs px-3 py-1 rounded-md hover:opacity-90 transition w-28 h-8 ml-auto">
              Send Request
            </button>
          </div>
        );
      })}
    </div>
  );
}

import { ShieldCheck, Shield, ShieldAlert, Check } from "lucide-react";
import type { TConsultant } from "@/types/manager";

interface TProps {
  consultant: TConsultant;
  onApprove: () => void;
}

export default function ConsultantCard({ consultant, onApprove }: TProps) {
  const riskStyles = {
    low: "bg-[#4DD07D]/15 text-[#4DD07D]",
    medium: "bg-[#F7B23B]/15 text-[#F7B23B]",
    high: "bg-[#F26969]/15 text-[#F26969]",
  };

  const RiskIcon =
    consultant.risk === "low"
      ? ShieldCheck
      : consultant.risk === "medium"
        ? Shield
        : ShieldAlert;

  return (
    <div className="border border-dark/10 bg-surface p-6 rounded-xl flex justify-between">
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
          {consultant.initials}
        </div>

        <div className="space-y-2">
          <div>
            <p className="font-semibold text-dark">{consultant.name}</p>
            <p className="text-sm text-body/60">
              Rating: 4.5/5 · Match {consultant.match}%
            </p>
          </div>

          <p className="text-sm text-body/70">
            {consultant.risk === "low"
              ? "Has all required competences and prior experience with this customer."
              : consultant.risk === "medium"
                ? "Has all required competences but no prior experience with this customer."
                : "Missing required competence(s): Warehouse Management"}
          </p>

          <div className="flex gap-2 flex-wrap pt-1">
            <span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
              Forklift
            </span>
            <span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
              Warehouse Management
            </span>
            {consultant.risk === "high" && (
              <span className="bg-dark/5 text-xs px-3 py-1 rounded-md">
                Quality Control
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <span
          className={`flex items-center gap-2 text-xs px-3 py-1 rounded-full ${riskStyles[consultant.risk]}`}
        >
          <RiskIcon className="w-3.5 h-3.5" />
          {consultant.risk === "low"
            ? "Low Risk"
            : consultant.risk === "medium"
              ? "Medium Risk"
              : "High Risk"}
        </span>

        <button
          onClick={onApprove}
          className="bg-[#4DD07D] text-white px-6 py-2.5 rounded-xl flex items-center gap-3 font-bold hover:opacity-90"
        >
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <Check className="w-3.5 h-3.5" />
          </div>
          Approve
        </button>
      </div>
    </div>
  );
}

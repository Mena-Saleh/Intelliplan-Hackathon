"use client";

import { Plus } from "lucide-react";

export type RequestButtonVariant = "compact" | "mid" | "full";

export default function RequestButton({
  action,
  label = "New Request",
  variant = "full",
  className = "",
}: {
  action: () => void;
  label?: string;
  variant?: RequestButtonVariant;
  className?: string;
}) {
  const isCompact = variant === "compact";
  const isMid = variant === "mid";

  return (
    <button
      type="button"
      onClick={action}
      title={isCompact ? label : undefined}
      aria-label={isCompact ? label : undefined}
      className={`
        flex items-center justify-center gap-2
        rounded-xl bg-accent text-white font-medium
        transition-all duration-200 hover:opacity-90
        ${isCompact ? "h-10 w-10 p-0" : isMid ? "px-3 py-2" : "w-full px-4 py-3"
        }
        ${className}
      `}
    >
      <Plus className="w-5 h-5 shrink-0" />

      {!isCompact && <span className="whitespace-nowrap">{label}</span>}
    </button>
  );
}

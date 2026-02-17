"use client";

import { Users } from "lucide-react";
import type { User } from "../types";
import { useSidebar } from "../contexts/sidebar-context";

export default function UserCard({ user }: { user: User }) {
  const { collapsed, phase } = useSidebar();

  const compact = collapsed || phase === "collapsing";

  return (
    <div className="border-t border-dark/10 p-2 z-999 mt-auto">
      <div
        className={`
          flex items-center rounded-xl transition-all duration-200
          ${compact ? "justify-center p-2" : "gap-3 p-2"}
        `}
        title={compact ? `${user.name} (${user.role})` : undefined}
      >
        {/* Avatar */}
        <div className="bg-primary/10 text-primary p-2 rounded-full shrink-0">
          <Users className="w-5 h-5" />
        </div>

        {/* Identity text only in expanded mode */}
        {!compact && (
          <div className="leading-tight">
            <p className="text-sm font-semibold whitespace-nowrap">{user.name}</p>
            <p className="text-xs text-body/50 whitespace-nowrap">{user.role}</p>
          </div>
        )}
      </div>
    </div>
  );
}

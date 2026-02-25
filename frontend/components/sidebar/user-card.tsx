"use client";

import { Users } from "lucide-react";
import type { TUser } from "../../types";

export default function UserCard({ user }: { user: TUser }) {

  return (
    <div className="border-t border-dark/10 p-2 z-999 mt-auto">
      <div
        className={`
          flex items-center rounded-xl transition-all duration-200 gap-3 p-2
        `}
        title={`${user.name} (${user.role})`}
      >
        <div className="bg-primary/10 text-primary p-2 rounded-full shrink-0">
          <Users className="w-5 h-5" />
        </div>

        <div className="leading-tight">
          <p className="text-sm font-semibold whitespace-nowrap">{user.name}</p>
          <p className="text-xs text-body/50 whitespace-nowrap">{user.role}</p>
        </div>

      </div>
    </div>
  );
}

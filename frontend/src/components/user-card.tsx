import { Users } from "lucide-react";
import type { User } from "../types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="border-t border-dark/10 p-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 text-primary p-2 rounded-full">
          <Users className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-body/50">{user.role}</p>
        </div>
      </div>
    </div>
  );
}

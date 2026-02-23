"use client";

import type { TUser } from "../types";
import Logo from "./logo";
import UserCard from "./user-card";

type TProps = {
  children: React.ReactNode;
  user: TUser;
};

export default function Sidebar({ children, user }: TProps) {
  return (
    <aside
      className="
        w-full bg-surface flex flex-col
        border-b border-dark/10
        lg:fixed lg:top-0 lg:left-0
        lg:h-screen lg:w-80
        lg:border-b-0 lg:border-r
      "
    >
      <div className="flex items-center justify-center border-b border-dark/10 p-4">
        <Logo />
      </div>

      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      <div className="border-t border-dark/10">
        <UserCard user={user} />
      </div>
    </aside>
  );
}

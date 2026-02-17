import type { User } from "../types";
import Logo from "./Logo";
import UserCard from "./user-card";

type SidebarProps = {
  children: React.ReactNode;
  user: User;
};

export default function Sidebar({ children, user }: SidebarProps) {
  return (
    <aside
      className="
        w-full bg-surface flex flex-col border-b border-dark/10
        sticky top-0 z-50
        lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-80
        lg:border-b-0 lg:border-r"
    >
      <Logo />
      <div className="flex md:flex-col">
        {children}

        <UserCard user={user} />
      </div>
    </aside>
  );
}

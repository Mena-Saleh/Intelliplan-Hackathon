import type { User } from "../types";
import Logo from "./Logo";
import UserCard from "./user-card";

type SidebarProps = {
  children: React.ReactNode;
  user: User;
};

export default function Sidebar({ children, user }: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 h-screen w-80 bg-surface flex flex-col border-r border-dark/10">
      <Logo />
      {children}
      <UserCard user={user} />
    </aside>
  );
}

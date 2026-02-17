"use client";

import { Clock, LayoutDashboard, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNav({ variant }: { variant: string }) {
  const pathname = usePathname();

  const navConfig = {
    manager: [{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
    consultant: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Work History", href: "/history", icon: Clock },
    ],
    customer: [{ name: "My Requests", href: "/chat", icon: MessageSquare }],
  };

  return (
    <div className="mt-4 px-4 flex-1 lg:flex-none">
      {navConfig[variant].map((item) => {
        const isActive = pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isActive
                ? "bg-primary/10 text-primary shadow-sm"
                : "text-body hover:bg-black/5 hover:text-primary"
            }`}
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span className="font-medium">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

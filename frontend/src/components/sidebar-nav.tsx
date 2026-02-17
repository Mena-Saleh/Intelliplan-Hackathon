"use client";

import { Clock, LayoutDashboard, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "../contexts/sidebar-context";

export default function SidebarNav({ variant }: { variant: string }) {
  const pathname = usePathname();
  const { showText, showTooltip, iconOnly } = useSidebar();

  const navConfig = {
    manager: [{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard }],
    consultant: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Work History", href: "/history", icon: Clock },
    ],
    customer: [{ name: "My Requests", href: "/chat", icon: MessageSquare }],
  };

  return (
    <nav className="space-y-2 px-2 mt-4 flex-1">
      {navConfig[variant].map((item) => {
        const isActive = pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            title={showTooltip ? item.name : undefined}
            aria-label={showTooltip ? item.name : undefined}
            className={`
              flex items-center rounded-xl transition-all duration-200
              ${iconOnly ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"}
              ${isActive
                ? "bg-primary/10 text-primary shadow-sm"
                : "text-body hover:bg-black/5 hover:text-primary"
              }
            `}
          >
            <Icon className="w-5 h-5 shrink-0" />

            {showText && (
              <span className="font-medium whitespace-nowrap">{item.name}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

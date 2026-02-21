"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig } from "@/src/constants/nav-config";

interface TProps {
  variant: "manager" | "consultant" | "customer";
}

export default function SidebarNav({ variant }: TProps) {
  const pathname = usePathname();

  return (
    <nav className="mt-4 px-4 flex-1 lg:flex-none">
      {navConfig[variant].map((item) => {
        const isActive = pathname.startsWith(item.href);
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            title={item.name}
            aria-label={item.name}
            className={`
              flex items-center rounded-xl transition-all duration-200
              gap-3 px-4 py-3
              ${isActive
                ? "bg-primary/10 text-primary shadow-sm"
                : "text-body hover:bg-black/5 hover:text-primary"
              }
            `}
          >
            <Icon className="w-5 h-5 shrink-0" />

            <span className="font-medium whitespace-nowrap">{item.name}</span>
          </Link>
        );
      })}
    </nav >
  );
}

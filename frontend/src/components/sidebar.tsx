"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SidebarContext from "../contexts/sidebar-context";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import type { User } from "../types";
import Logo from "./Logo";
import UserCard from "./user-card";

/*
 Animation duration must match Tailwind duration-300
 Single source of truth avoids desync bugs.
*/
const ANIMATION_MS = 300;

type Props = {
  children: React.ReactNode;
  user: User;
};

export default function Sidebar({ children, user }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [phase, setPhase] = useState<"idle" | "expanding" | "collapsing">("idle");

  const collapse = useCallback(() => {
    setCollapsed(true);
    setPhase("collapsing");
  }, []);

  const expand = useCallback(() => {
    setCollapsed(false);
    setPhase("expanding");
  }, []);

  const toggle = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      setPhase(next ? "collapsing" : "expanding");
      return next;
    });
  }, []);

  /*
   Prevent label flicker:
   text only appears AFTER expansion finishes
  */
  useEffect(() => {
    if (phase === "idle") return;

    const t = setTimeout(() => setPhase("idle"), ANIMATION_MS);
    return () => clearTimeout(t);
  }, [phase]);

  /*
   Derived semantics.
   Consumers rely on this instead of guessing.
  */
  const contextValue = useMemo(() => {
    const isExpanded = !collapsed;

    return {
      collapsed,
      isExpanded,

      toggle,
      expand,
      collapse,

      phase,

      // behavioral semantics
      showText: isExpanded && phase !== "collapsing",
      showTooltip: collapsed,
      iconOnly: collapsed,
    };
  }, [collapsed, phase, expand, collapse, toggle]);

  return (
    <SidebarContext.Provider value={contextValue}>
      <aside
        className={`group/sidebar
    w-full bg-surface flex flex-col overflow-hidden
    border-b border-dark/10
    transition-all duration-300
    lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:border-b-0 lg:border-r
    ${collapsed ? "lg:w-14" : "lg:w-80"}
  `}
      >
        {/* Collapsed overlay — covers entire sidebar */}
        {collapsed && (
          <button
            onClick={toggle}
            type="button"
            aria-label="Expand sidebar"
            className="
      absolute inset-0 z-30
      flex items-start justify-center
      cursor-e-resize
      bg-transparent
      transition-colors duration-200
      hover:bg-black/5
    "
          >
            {/* Reveal icon directly above logo */}
            <span
              className="
        mt-3 rounded-lg bg-surface p-2 shadow-sm
        opacity-0 -translate-y-1
        transition-all duration-200
        group-hover/sidebar:opacity-100
        group-hover/sidebar:translate-y-0
      "
            >
              <PanelLeftOpen />
            </span>
          </button>
        )}

        {/* Header content */}
        <div className="relative flex items-center justify-center border-b border-dark/10 p-2">
          <Logo />

          {/* Visible toggle when expanded */}
          {!collapsed && (
            <button
              onClick={toggle}
              type="button"
              aria-label="Collapse sidebar"
              className="
      hidden lg:block
      absolute right-2 top-2
      rounded-lg p-2
      transition-colors duration-200
      hover:bg-neutral-600
    "
              style={{ cursor: "w-resize" }}
            >
              <PanelRightOpen className="transition-transform duration-200" />
            </button>
          )}
        </div>

        {/* Content */}
        {children}

        {/* Footer */}

        <UserCard user={user} />
      </aside>
    </SidebarContext.Provider>
  );
}

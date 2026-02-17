"use client";
import { createContext, useContext } from "react";

/*
 Layout contract, not implementation details.
 Components consume behavior, not pixels.
*/
export type SidebarContextValue = {
  collapsed: boolean;
  isExpanded: boolean;

  toggle: () => void;
  expand: () => void;
  collapse: () => void;

  showText: boolean;
  showTooltip: boolean;
  iconOnly: boolean;

  phase: "idle" | "expanding" | "collapsing";
};

export const SidebarContext = createContext<SidebarContextValue | null>(null);

/*
 Enforces correct usage:
 avoids silent bugs when component is rendered outside sidebar.
*/
export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used inside <Sidebar>");
  }
  return ctx;
}

export default SidebarContext;

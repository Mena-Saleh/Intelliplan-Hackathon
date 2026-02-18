"use client";

import { parse } from "path";
import { useSidebar } from "../contexts/sidebar-context";

export default function Logo() {
  const { showText, showTooltip, iconOnly } = useSidebar();

  return (
    <div className="leading-tight py-4 flex flex-col items-start">
      {iconOnly ? (
        <h1
          aria-label="Intelliplan AI-powered Staffing Portal"
          className="font-heading text-xl"
        >
          <span className="text-primary">In</span>
        </h1>
      ) : (
        <>
          <h1 className="font-heading text-xl">
            <span className="text-primary">Intelli</span>
            <span className="text-body">plan</span>
          </h1>
          <p className="text-xs text-body/50 tracking-wide">
            AI-powered Staffing Portal
          </p>
        </>
      )}
    </div>
  );
}

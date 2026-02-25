"use client";

import { User } from "lucide-react";

interface TProps {
  email: string;
  phone: string;
  onEmailChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
}

export default function PersonalInfoCard({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
}: TProps) {
  return (
    <div className="bg-surface border border-dark/10 rounded-2xl p-6">
      <h3 className="flex items-center gap-2 font-semibold mb-4 text-primary">
        <User className="w-4 h-4 text-primary" />
        Personal Information
      </h3>

      <div className="mb-4">
        <label className="block text-sm mb-1 text-body/70">Full Name</label>
        <input
          value="Hanna Larsson"
          readOnly
          className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm bg-dark/5"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1 text-body/70">Email</label>
        <input
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label className="block text-sm mb-1 text-body/70">Phone</label>
        <input
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className="w-full border border-dark/10 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}

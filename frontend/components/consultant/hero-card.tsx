"use client";

interface TProps {
  name: string;
}

export default function HeroCard({ name }: TProps) {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-3xl shadow-md">
      <h2 className="!text-white">Welcome back, {name} 👋</h2>
      <p className="text-white/80 mt-2">
        Stay on top of your shifts and opportunities.
      </p>
    </div>
  );
}

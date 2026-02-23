"use client";

export default function ProfileHeader() {
  return (
    <div className="bg-linear-to-r from-primary to-secondary text-white p-6 rounded-2xl mb-8">
      <h2 className="!text-white">My Profile & Availability</h2>
      <p className="text-white/80 text-sm mt-1">
        Manage your schedule, competences, and preferred locations.
      </p>
    </div>
  );
}

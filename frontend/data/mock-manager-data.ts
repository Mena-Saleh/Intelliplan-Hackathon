import type { TRequest, TConsultant } from "@/types/manager";

export const MOCK_REQUESTS: TRequest[] = [
  {
    id: "1",
    customer: "Johan Andersson",
    role: "Warehouse Worker",
    date: "2026-02-13 · 06:00–14:00",
    location: "Warehouse AB · Stockholm",
    description:
      "Sudden spike in deliveries tomorrow morning. Need 2 extra workers with forklift certification.",
    status: "pending",
    urgency: "high",
    skills: ["Forklift", "Warehouse Management"],
  },
];

export const MOCK_CONSULTANTS: TConsultant[] = [
  { id: "1", name: "Erik Johansson", initials: "EJ", risk: "low", match: 100 },
  { id: "2", name: "Anders Nilsson", initials: "AN", risk: "medium", match: 68 },
  { id: "3", name: "Maria Svensson", initials: "MS", risk: "high", match: 59 },
];

import type {
  TShift,
  TConsultantStats,
  TPastShift,
  TLocationSuggestion,
  TCompetence,
  TTimeSlot,
} from "@/types/consultant";

export const MOCK_NEW_SHIFT_OFFERS: TShift[] = [
  {
    id: 1,
    role: "Warehouse Worker",
    date: "13 Feb 2026",
    time: "06:00–14:00",
    location: "Stockholm",
  },
];

export const MOCK_CONFIRMED_SHIFTS: TShift[] = [
  {
    id: 1,
    role: "Warehouse Worker",
    date: "18 Feb 2026",
    time: "08:00–16:00",
    location: "Stockholm",
  },
];

export const MOCK_CONSULTANT_STATS: TConsultantStats = {
  shifts: 12,
  hours: 96,
  rating: 4.8,
};


export const MOCK_PAST_SHIFTS: TPastShift[] = [
  {
    id: 1,
    role: "Forklift Operator",
    company: "Warehouse AB",
    date: "Jan 2026",
    hours: 8,
    rating: 5,
  },
  {
    id: 2,
    role: "Warehouse Worker",
    company: "Logistics Pro",
    date: "Jan 2026",
    hours: 6,
    rating: 4,
  },
  {
    id: 3,
    role: "Packing Specialist",
    company: "Nordic Storage",
    date: "Dec 2025",
    hours: 10,
    rating: 5,
  },
];

export const MOCK_LOCATION_SUGGESTIONS: TLocationSuggestion[] = [
  { name: "Stockholm" },
  { name: "Solna" },
  { name: "Sundbyberg" },
  { name: "Uppsala" },
  { name: "Västerås" },
  { name: "Örebro" },
  { name: "Linköping" },
  { name: "Norrköping" },
  { name: "Gothenburg" },
  { name: "Malmö" },
  { name: "Lund" },
  { name: "Helsingborg" },
  { name: "Jönköping" },
  { name: "Borås" },
  { name: "Eskilstuna" },
  { name: "Karlstad" },
  { name: "Växjö" },
  { name: "Gävle" },
  { name: "Falun" },
  { name: "Södertälje" },
  { name: "Täby" },
  { name: "Lidingö" },
  { name: "Nacka" },
  { name: "Haninge" },
];

export const MOCK_INITIAL_LOCATIONS = ["Stockholm", "Solna"];

export const MOCK_COMPETENCES: TCompetence[] = [
  { name: "Forklift Operator" },
  { name: "Warehouse Worker" },
  { name: "Order Picker" },
  { name: "Machine Operator" },
  { name: "Truck Driver" },
  { name: "Quality Control" },
  { name: "Team Lead" },
  { name: "Inventory Management" },
  { name: "Logistics Planning" },
  { name: "Safety Compliance" },
];

export const MOCK_TIME_SLOTS: TTimeSlot[] = [
  { label: "06:00 – 10:00" },
  { label: "08:00 – 12:00" },
  { label: "10:00 – 14:00" },
  { label: "12:00 – 16:00" },
  { label: "14:00 – 18:00" },
  { label: "16:00 – 20:00" },
  { label: "18:00 – 22:00" },
];

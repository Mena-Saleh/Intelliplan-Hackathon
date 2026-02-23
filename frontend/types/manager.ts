export type TStatus = "pending" | "approved" | "rejected" | "bypassed";

export type TConsultant = {
  id: string;
  name: string;
  initials: string;
  risk: "low" | "medium" | "high";
  match: number;
};

export type TRequest = {
  id: string;
  customer: string;
  role: string;
  date: string;
  location: string;
  description: string;
  status: TStatus;
  urgency: "low" | "medium" | "high";
  skills: string[];
};

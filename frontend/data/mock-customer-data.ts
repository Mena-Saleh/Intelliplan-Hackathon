import type { TCustomer } from "@/types";

export const MOCK_CUSTOMER: TCustomer = {
  id: 1,
  name: "Johan Andersson",
  role: "Warehouse AB",
  department: {
    competences: ["logistics", "customer relations"],
    preferredConsultants: ["Hanna", "Kevin"],
  },
};

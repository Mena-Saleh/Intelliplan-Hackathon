export interface TUser {
  name: string;
  role: string;
}
export interface TCustomer {
  id: number;
  name: string;
  role: string;
  department: TDepartment;
}

export interface TDepartment {
  competences: string[];
  preferredConsultants: string[];
}

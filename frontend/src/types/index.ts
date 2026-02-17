// export type Chat = {
//   id: string;
//   title: string;
//   createdAt: Date;
// };

export interface User {
  name: string;
  role: string;
}
export interface Customer {
  id: number;
  name: string;
  role: string;
  department: Department;
}

export interface Department {
  competences: string[];
  preferredConsultants: string[];
}

"use client";
import Sidebar from "@/components/sidebar";
import { Bell, Check } from "lucide-react";
import SidebarNav from "@/components/sidebar-nav";
import { TCustomer } from "@/types";

const customer: TCustomer = {
  id: 1,
  name: "Johan Andersson",
  role: "Warehouse AB",
  department: {
    competences: ["logistics", "customer relations"],
    preferredConsultants: ["Hanna", "Kevin"],
  },
};
// const johan = customers.find(customer => customer.id === 1);

export default function DashboardPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
      <Sidebar user={{ name: customer.name, role: customer.role }}>
        <SidebarNav variant="customer" />
      </Sidebar>

      <main className="flex-1 p-6 lg:p-10 lg:ml-80">
        <h1 className="mb-1">Dashboard</h1>
        <p className="text-body/60 mb-8">Manage staffing requests and approvals</p>

        <section
          className="space-y-5 p-6 rounded-2xl bg bg-gradient-to-br from-[hsla(205,60%,50%,1)] to-[hsla(150,40%,60%,1)]
"
        >
          <h2 className="!text-white">Welcome {customer.name}!</h2>
          <p className="text-white">Here is an overview of recent activities:</p>
        </section>

        <section className="space-y-5 mt-10">
          <h3 className="flex items-center gap-2 mb-4 text-primary">
            <Check className="w-6 h-6 text-primary" />
            Booked Shifts
          </h3>

          <div className="flex justify-center p-5 bg-white rounded">
            <span className="text-gray-400">No active shifts...</span>
          </div>
        </section>

        <section className="space-y-5 mt-10">
          <h3 className="flex items-center gap-2 mb-4 text-primary">
            <Bell className="w-6 h-6 text-primary" />
            Notifications
          </h3>

          <div className="flex justify-center p-5 bg-white rounded">
            <span className="text-gray-400">No new notifications...</span>
          </div>
        </section>
      </main>
    </div>
  );
}

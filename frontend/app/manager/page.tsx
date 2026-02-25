"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import SidebarNav from "@/components/sidebar/sidebar-nav";
import StatsRow from "@/components/manager/stats-row";
import RequestList from "@/components/manager/request-list";
import ConsultantCard from "@/components/manager/consultant-card";
import { Users, Activity, CheckCircle } from "lucide-react";
import { MOCK_REQUESTS, MOCK_CONSULTANTS } from "@/data/mock-manager-data";
import type { TRequest } from "@/types/manager";

export default function DashboardPage() {
  const [requests, setRequests] = useState<TRequest[]>(MOCK_REQUESTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedRequest = requests.find((r) => r.id === selectedId);

  const approve = () => {
    setRequests((prev) =>
      prev.map((r) => (r.id === selectedId ? { ...r, status: "approved" } : r)),
    );
    setSelectedId(null);
  };

  const reject = () => {
    setRequests((prev) =>
      prev.map((r) => (r.id === selectedId ? { ...r, status: "rejected" } : r)),
    );
    setSelectedId(null);
  };

  const pendingRequests = requests.filter((r) => r.status === "pending");
  const processedRequests = requests.filter((r) => r.status !== "pending");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar user={{ name: "Sara Lindqvist", role: "Staffing Agency" }}>
        <SidebarNav variant="manager" />
      </Sidebar>

      <main className="ml-80 flex-1 p-10">
        <h2 className="mb-1">Dashboard</h2>
        <p className="text-body/60 mb-8">
          Manage staffing requests and approvals
        </p>

        <StatsRow requests={requests} />

        <h3 className="flex items-center gap-2 mb-4 text-primary">
          <Users className="w-6 h-6 text-primary" />
          Pending Approval
        </h3>

        {pendingRequests.length === 0 && (
          <div className="bg-surface p-12 rounded-2xl border border-dark/10 text-center">
            <CheckCircle className="mx-auto mb-4 w-10 h-10 text-[#4DD07D]" />
            <p className="text-body/60">All caught up! No pending requests.</p>
          </div>
        )}

        {!selectedRequest && pendingRequests.length > 0 && (
          <RequestList requests={pendingRequests} onSelect={setSelectedId} />
        )}

        {selectedRequest && (
          <div className="bg-surface rounded-2xl border border-dark/10 overflow-hidden mt-4">
            <div className="p-6 bg-[#FBFCFE] space-y-4">
              <h4 className="text-primary font-semibold">
                AI-Suggested Consultants
              </h4>

              {MOCK_CONSULTANTS.map((c) => (
                <ConsultantCard key={c.id} consultant={c} onApprove={approve} />
              ))}

              <button
                onClick={reject}
                className="mt-6 border border-[#F26969] text-[#F26969] px-6 py-2 rounded-xl hover:bg-[#F26969]/5"
              >
                Reject Request
              </button>
            </div>
          </div>
        )}

        <h3 className="mt-12 mb-4 flex items-center gap-2 text-primary">
          <Activity className="w-5 h-5" />
          Recent Activity
        </h3>

        {processedRequests.length === 0 && (
          <p className="text-body/60">No processed requests yet.</p>
        )}
      </main>
    </div>
  );
}

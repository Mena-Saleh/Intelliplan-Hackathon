import { Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import type { TRequest } from "@/types/manager";

interface TProps {
  requests: TRequest[];
}

export default function StatsRow({ requests }: TProps) {
  const count = (status: TRequest["status"]) =>
    requests.filter((r) => r.status === status).length;

  return (
    <div className="flex gap-6 mb-10">
      <Stat
        label="Pending"
        value={count("pending")}
        icon={<Clock />}
        color="#0098C3"
      />
      <Stat
        label="Approved"
        value={count("approved")}
        icon={<CheckCircle />}
        color="#4DD07D"
      />
      <Stat
        label="Rejected"
        value={count("rejected")}
        icon={<XCircle />}
        color="#F26969"
      />
      <Stat
        label="Bypassed"
        value={count("bypassed")}
        icon={<AlertTriangle />}
        color="#F7B23B"
      />
    </div>
  );
}

function Stat({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="bg-surface px-6 py-5 rounded-2xl border border-dark/10 w-44 flex justify-between items-center">
      <div>
        <p className="text-sm text-body/70 mb-2">{label}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div style={{ color }} className="text-xl">
        {icon}
      </div>
    </div>
  );
}

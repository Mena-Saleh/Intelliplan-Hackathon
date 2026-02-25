import type { TRequest } from "@/types/manager";

interface TProps {
  requests: TRequest[];
  onSelect: (id: string) => void;
}

export default function RequestList({ requests, onSelect }: TProps) {
  return (
    <div className="space-y-4">
      {requests.map((req) => (
        <div
          key={req.id}
          onClick={() => onSelect(req.id)}
          className="bg-surface p-6 rounded-2xl border border-dark/10 cursor-pointer hover:shadow-md transition"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-dark">{req.customer}</p>
              <p className="text-sm text-body/60">
                {req.role} · {req.date}
              </p>
              <p className="text-sm text-body/60">{req.location}</p>
            </div>

            {req.urgency === "high" && (
              <div className="flex items-center gap-2 bg-[#F26969]/10 text-[#F26969] px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2.5 h-2.5 bg-[#F26969] rounded-full" />
                high urgency
              </div>
            )}
          </div>

          <p className="mt-4 text-body/80">{req.description}</p>

          <div className="flex gap-2 mt-4">
            {req.skills.map((skill) => (
              <span
                key={skill}
                className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

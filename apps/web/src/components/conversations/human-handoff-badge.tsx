import { UserCheck } from "lucide-react";

export function HumanHandoffBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded font-medium">
      <UserCheck className="w-3 h-3" />
      Handoff
    </span>
  );
}

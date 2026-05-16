import { CheckCircle, XCircle, Clock } from "lucide-react";
type Status = "active" | "inactive" | "pending";
const config: Record<Status, { icon: React.ElementType; label: string; color: string }> = {
  active:   { icon: CheckCircle, label: "Active",   color: "text-green-500 bg-green-50" },
  inactive: { icon: XCircle,    label: "Inactive",  color: "text-gray-400 bg-gray-50" },
  pending:  { icon: Clock,      label: "Pending",   color: "text-yellow-500 bg-yellow-50" },
};
export function FlowStatus({ status }: { status: Status }) {
  const { icon: Icon, label, color } = config[status];
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${color}`}>
      <Icon className="w-3 h-3" />{label}
    </span>
  );
}

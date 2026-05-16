import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export function MetricCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
  iconBg,
}: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <div className="flex items-center gap-1.5 mt-3">
        {changeType === "positive" ? (
          <TrendingUp className="w-4 h-4 text-green-500" />
        ) : changeType === "negative" ? (
          <TrendingDown className="w-4 h-4 text-red-500" />
        ) : null}
        <span
          className={`text-sm font-medium ${
            changeType === "positive"
              ? "text-green-600"
              : changeType === "negative"
              ? "text-red-600"
              : "text-gray-500"
          }`}
        >
          {change}
        </span>
        <span className="text-sm text-gray-400">vs last month</span>
      </div>
    </div>
  );
}

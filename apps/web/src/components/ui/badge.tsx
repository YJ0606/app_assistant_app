import { clsx } from "clsx";
type BadgeVariant = "default" | "success" | "warning" | "danger" | "info" | "purple";
const variants: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-600",
  success: "bg-green-50 text-green-700",
  warning: "bg-yellow-50 text-yellow-700",
  danger:  "bg-red-50 text-red-700",
  info:    "bg-blue-50 text-blue-700",
  purple:  "bg-purple-50 text-purple-700",
};
export function Badge({ children, variant = "default", className }: { children: React.ReactNode; variant?: BadgeVariant; className?: string }) {
  return <span className={clsx("inline-flex items-center text-xs font-medium px-2 py-1 rounded-full", variants[variant], className)}>{children}</span>;
}

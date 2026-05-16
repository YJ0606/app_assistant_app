import { clsx } from "clsx";
export function Card({ children, className, padding = "p-5" }: { children: React.ReactNode; className?: string; padding?: string }) {
  return <div className={clsx("bg-white rounded-xl border border-gray-200", padding, className)}>{children}</div>;
}
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={clsx("flex items-center justify-between mb-4", className)}>{children}</div>;
}
export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-gray-900">{children}</h3>;
}

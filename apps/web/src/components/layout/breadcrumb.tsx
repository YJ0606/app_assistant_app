"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const labels: Record<string, string> = {
  dashboard: "Dashboard", conversations: "Conversations", automations: "Automations",
  faq: "FAQ", catalog: "Catalog", bookings: "Bookings", orders: "Orders",
  analytics: "Analytics", billing: "Billing", team: "Team", settings: "Settings",
  new: "New", import: "Import", calendar: "Calendar", invoices: "Invoices", usage: "Usage",
  invite: "Invite", business: "Business Profile", whatsapp: "WhatsApp", templates: "Templates",
  "business-hours": "Business Hours", notifications: "Notifications", security: "Security",
};

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: labels[seg] ?? seg,
    href: "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  if (crumbs.length <= 1) return null;

  return (
    <nav className="flex items-center gap-1 text-sm text-gray-400 mb-4">
      <Link href="/" className="hover:text-gray-600"><Home className="w-4 h-4" /></Link>
      {crumbs.map((c) => (
        <span key={c.href} className="flex items-center gap-1">
          <ChevronRight className="w-3.5 h-3.5" />
          {c.isLast ? (
            <span className="text-gray-700 font-medium">{c.label}</span>
          ) : (
            <Link href={c.href} className="hover:text-gray-600 transition-colors">{c.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

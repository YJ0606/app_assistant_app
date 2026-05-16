import Link from "next/link";
import { AutomationCard } from "@/components/automations/automation-card";
import { Plus } from "lucide-react";

export const metadata = { title: "Automations" };

const automations = [
  {
    id: "1",
    name: "Welcome Message",
    description: "Send a welcome message when a new customer messages for the first time",
    trigger: "FIRST_MESSAGE" as const,
    isActive: true,
    runCount: 1247,
    lastRunAt: "2 min ago",
  },
  {
    id: "2",
    name: "After-Hours Auto Reply",
    description: "Automatically respond to messages outside business hours",
    trigger: "AFTER_HOURS" as const,
    isActive: true,
    runCount: 438,
    lastRunAt: "8 hrs ago",
  },
  {
    id: "3",
    name: "Booking Reminder",
    description: "Send reminder 1 hour before scheduled appointment",
    trigger: "BOOKING_REMINDER" as const,
    isActive: true,
    runCount: 189,
    lastRunAt: "1 hr ago",
  },
  {
    id: "4",
    name: "Keyword: Pricing",
    description: "Send pricing info when customer asks about price or cost",
    trigger: "KEYWORD" as const,
    isActive: false,
    runCount: 92,
    lastRunAt: "2 days ago",
  },
];

export default function AutomationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Automations</h1>
          <p className="text-gray-500 text-sm mt-1">Set rules to automate your WhatsApp conversations.</p>
        </div>
        <Link href="/dashboard/automations/new" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          New Automation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {automations.map((a) => (
          <AutomationCard key={a.id} automation={a} />
        ))}
      </div>
    </div>
  );
}

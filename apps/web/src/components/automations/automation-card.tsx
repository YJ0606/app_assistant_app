"use client";
import Link from "next/link";
import { AutomationToggle } from "./automation-toggle";
import { Zap, Clock, MessageSquare, Calendar, Hash, BarChart2 } from "lucide-react";
import { useState } from "react";

type AutomationTrigger = "KEYWORD" | "INTENT" | "FIRST_MESSAGE" | "AFTER_HOURS" | "ORDER_PLACED" | "BOOKING_CREATED" | "BOOKING_REMINDER" | "PAYMENT_RECEIVED" | "SCHEDULE" | "WEBHOOK";

interface AutomationCardProps {
  automation: {
    id: string;
    name: string;
    description: string;
    trigger: AutomationTrigger;
    isActive: boolean;
    runCount: number;
    lastRunAt: string;
  };
}

const triggerConfig: Record<AutomationTrigger, { label: string; icon: React.ElementType; color: string }> = {
  KEYWORD:          { label: "Keyword Match",    icon: Hash,           color: "bg-blue-50 text-blue-600" },
  INTENT:           { label: "Intent Detected",  icon: Zap,            color: "bg-yellow-50 text-yellow-600" },
  FIRST_MESSAGE:    { label: "First Message",    icon: MessageSquare,  color: "bg-green-50 text-green-600" },
  AFTER_HOURS:      { label: "After Hours",      icon: Clock,          color: "bg-purple-50 text-purple-600" },
  ORDER_PLACED:     { label: "Order Placed",     icon: Zap,            color: "bg-orange-50 text-orange-600" },
  BOOKING_CREATED:  { label: "Booking Created",  icon: Calendar,       color: "bg-teal-50 text-teal-600" },
  BOOKING_REMINDER: { label: "Booking Reminder", icon: Calendar,       color: "bg-indigo-50 text-indigo-600" },
  PAYMENT_RECEIVED: { label: "Payment",          icon: Zap,            color: "bg-emerald-50 text-emerald-600" },
  SCHEDULE:         { label: "Scheduled",        icon: Clock,          color: "bg-gray-50 text-gray-600" },
  WEBHOOK:          { label: "Webhook",          icon: Zap,            color: "bg-pink-50 text-pink-600" },
};

export function AutomationCard({ automation }: AutomationCardProps) {
  const [active, setActive] = useState(automation.isActive);
  const cfg = triggerConfig[automation.trigger];
  const Icon = cfg.icon;

  return (
    <div className={`bg-white rounded-xl border p-5 transition-all ${active ? "border-gray-200" : "border-gray-100 opacity-70"}`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3">
          <div className={`w-9 h-9 ${cfg.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{automation.name}</h3>
            <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mt-0.5 ${cfg.color}`}>
              {cfg.label}
            </span>
          </div>
        </div>
        <AutomationToggle active={active} onToggle={() => setActive(!active)} />
      </div>

      <p className="text-sm text-gray-500 mb-4">{automation.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5" />
            {automation.runCount.toLocaleString()} runs
          </span>
          <span>Last: {automation.lastRunAt}</span>
        </div>
        <Link
          href={`/dashboard/automations/${automation.id}`}
          className="text-brand-600 font-medium hover:text-brand-700 transition-colors"
        >
          Edit →
        </Link>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { HumanHandoffBadge } from "./human-handoff-badge";

interface Conversation {
  id: string;
  customerName: string;
  phone: string;
  lastMessage: string;
  time: string;
  unread: number;
  status: "OPEN" | "ASSIGNED" | "HUMAN_HANDOFF" | "RESOLVED" | "CLOSED";
  isAiActive: boolean;
}

export function ConversationItem({ conversation: c }: { conversation: Conversation }) {
  const initials = c.customerName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const statusColor: Record<string, string> = {
    OPEN: "bg-green-400",
    ASSIGNED: "bg-blue-400",
    HUMAN_HANDOFF: "bg-orange-400",
    RESOLVED: "bg-gray-400",
    CLOSED: "bg-gray-300",
  };

  return (
    <Link
      href={`/dashboard/conversations/${c.id}`}
      className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-50 transition-colors"
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-sm font-semibold text-white">
          {initials}
        </div>
        <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${statusColor[c.status]} rounded-full border-2 border-white`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-gray-900 text-sm truncate">{c.customerName}</span>
          <span className="text-xs text-gray-400 flex-shrink-0">{c.time}</span>
        </div>
        <p className="text-xs text-gray-500 truncate mt-0.5">{c.lastMessage}</p>
        <div className="flex items-center gap-1.5 mt-1">
          {c.isAiActive && (
            <span className="text-xs bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded font-medium">
              AI
            </span>
          )}
          {c.status === "HUMAN_HANDOFF" && <HumanHandoffBadge />}
        </div>
      </div>

      {/* Unread */}
      {c.unread > 0 && (
        <div className="w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <span className="text-white text-xs font-bold">{c.unread}</span>
        </div>
      )}
    </Link>
  );
}

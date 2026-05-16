"use client";
import { useState } from "react";
import { ConversationItem } from "./conversation-item";
import { Search, Filter, Plus } from "lucide-react";

const conversations = [
  {
    id: "1",
    customerName: "Priya Sharma",
    phone: "+91 98765 43210",
    lastMessage: "When is my appointment confirmed?",
    time: "2m ago",
    unread: 2,
    status: "OPEN" as const,
    isAiActive: true,
  },
  {
    id: "2",
    customerName: "Rahul Kumar",
    phone: "+91 87654 32109",
    lastMessage: "What are your delivery charges?",
    time: "8m ago",
    unread: 0,
    status: "OPEN" as const,
    isAiActive: true,
  },
  {
    id: "3",
    customerName: "Anita Patel",
    phone: "+91 76543 21098",
    lastMessage: "My order hasn't arrived yet",
    time: "15m ago",
    unread: 1,
    status: "HUMAN_HANDOFF" as const,
    isAiActive: false,
  },
  {
    id: "4",
    customerName: "Deepak Shah",
    phone: "+91 65432 10987",
    lastMessage: "Thank you for your help!",
    time: "1h ago",
    unread: 0,
    status: "RESOLVED" as const,
    isAiActive: false,
  },
  {
    id: "5",
    customerName: "Sunita Rao",
    phone: "+91 54321 09876",
    lastMessage: "I'd like to place an order for 3 items",
    time: "2h ago",
    unread: 0,
    status: "ASSIGNED" as const,
    isAiActive: true,
  },
];

const filters = ["All", "Open", "Assigned", "Handoff", "Resolved"];

export function ConversationList() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = conversations.filter((c) => {
    const matchSearch =
      c.customerName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      activeFilter === "All" ||
      c.status === activeFilter.toUpperCase().replace("-", "_");
    return matchSearch && matchFilter;
  });

  return (
    <div className="w-80 flex-shrink-0 border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">Conversations</h2>
          <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 mb-3">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none flex-1"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                activeFilter === f
                  ? "bg-brand-500 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <span className="text-2xl mb-2">🔍</span>
            <p className="text-sm">No conversations found</p>
          </div>
        ) : (
          filtered.map((conv) => (
            <ConversationItem key={conv.id} conversation={conv} />
          ))
        )}
      </div>
    </div>
  );
}

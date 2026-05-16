"use client";
import { useState } from "react";
import { MessageBubble } from "./message-bubble";
import { UserCheck, Bot, MoreVertical, Phone, Send, Paperclip } from "lucide-react";

const mockMessages = [
  { content: "Hello! I'd like to book an appointment", direction: "INBOUND" as const, status: "READ" as const, isAiGenerated: false, time: "10:02 AM" },
  { content: "Hi Priya! 👋 I can help you book an appointment. What service are you looking for?", direction: "OUTBOUND" as const, status: "READ" as const, isAiGenerated: true, time: "10:02 AM" },
  { content: "I need a haircut and beard trim", direction: "INBOUND" as const, status: "READ" as const, isAiGenerated: false, time: "10:03 AM" },
  { content: "Great choice! 💇 Here are the available slots for today:\n\n1️⃣ 11:00 AM\n2️⃣ 1:00 PM\n3️⃣ 3:30 PM\n\nReply with your preferred time.", direction: "OUTBOUND" as const, status: "READ" as const, isAiGenerated: true, time: "10:03 AM" },
  { content: "3:30 PM works for me", direction: "INBOUND" as const, status: "READ" as const, isAiGenerated: false, time: "10:04 AM" },
  { content: "✅ Booked! Your appointment is confirmed for today at 3:30 PM.\n\nName: Priya Sharma\nService: Haircut + Beard Trim\nTime: 3:30 PM\n\nYou'll receive a reminder 1 hour before. See you soon! 🎉", direction: "OUTBOUND" as const, status: "DELIVERED" as const, isAiGenerated: true, time: "10:04 AM" },
  { content: "When is my appointment confirmed?", direction: "INBOUND" as const, status: "READ" as const, isAiGenerated: false, time: "10:20 AM" },
];

interface ConversationDetailProps {
  conversationId: string;
}

export function ConversationDetail({ conversationId }: ConversationDetailProps) {
  const [reply, setReply] = useState("");
  const [isAiActive, setIsAiActive] = useState(true);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-sm font-semibold text-white">
            PS
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">Priya Sharma</div>
            <div className="text-xs text-gray-400">+91 98765 43210</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAiActive(!isAiActive)}
            className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
              isAiActive ? "bg-brand-50 text-brand-600" : "bg-gray-100 text-gray-500"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            AI {isAiActive ? "ON" : "OFF"}
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium bg-orange-50 text-orange-600 px-3 py-1.5 rounded-full hover:bg-orange-100 transition-colors">
            <UserCheck className="w-3.5 h-3.5" />
            Handoff
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <Phone className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          {mockMessages.map((msg, i) => (
            <MessageBubble key={i} message={msg} />
          ))}
        </div>
      </div>

      {/* Reply box */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-end gap-3 bg-gray-50 rounded-xl border border-gray-200 p-3">
          <button className="p-1.5 text-gray-400 hover:text-gray-600">
            <Paperclip className="w-5 h-5" />
          </button>
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Type a message..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none resize-none"
          />
          <button
            disabled={!reply.trim()}
            className="p-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        {isAiActive && (
          <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <Bot className="w-3 h-3" />
            AI is handling this conversation. Your message will override AI.
          </p>
        )}
      </div>
    </div>
  );
}

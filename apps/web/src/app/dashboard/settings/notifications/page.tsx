"use client";
import { useState } from "react";
export default function NotificationsSettingsPage() {
  const [settings, setSettings] = useState({ newConversation: true, humanHandoff: true, newBooking: true, newOrder: true, bookingReminder: false, weeklyReport: true, emailSummary: false });
  const toggle = (key: keyof typeof settings) => setSettings(s => ({ ...s, [key]: !s[key] }));
  const items = [
    { key: "newConversation", label: "New Conversation", desc: "When a new customer starts a conversation" },
    { key: "humanHandoff", label: "Human Handoff", desc: "When AI transfers to a human agent" },
    { key: "newBooking", label: "New Booking", desc: "When a customer makes a booking" },
    { key: "newOrder", label: "New Order", desc: "When an order is placed" },
    { key: "bookingReminder", label: "Booking Reminders", desc: "Daily digest of upcoming bookings" },
    { key: "weeklyReport", label: "Weekly Report", desc: "Weekly analytics summary email" },
    { key: "emailSummary", label: "Daily Email Summary", desc: "End-of-day activity summary" },
  ] as const;
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Notifications</h1><p className="text-gray-500 text-sm mt-1">Configure how you receive alerts and updates.</p></div>
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
        {items.map(item => (
          <div key={item.key} className="flex items-center justify-between px-5 py-4">
            <div><div className="text-sm font-medium text-gray-900">{item.label}</div><div className="text-xs text-gray-500 mt-0.5">{item.desc}</div></div>
            <button onClick={() => toggle(item.key)} className={`w-11 h-6 rounded-full transition-colors ${settings[item.key] ? "bg-brand-500" : "bg-gray-200"}`}><div className={`w-4 h-4 bg-white rounded-full shadow mx-1 transition-transform ${settings[item.key] ? "translate-x-5" : "translate-x-0"}`} /></button>
          </div>
        ))}
      </div>
      <div className="flex justify-end"><button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm">Save Preferences</button></div>
    </div>
  );
}

"use client";
import { useState } from "react";
const days = [{ key: "mon", label: "Monday" }, { key: "tue", label: "Tuesday" }, { key: "wed", label: "Wednesday" }, { key: "thu", label: "Thursday" }, { key: "fri", label: "Friday" }, { key: "sat", label: "Saturday" }, { key: "sun", label: "Sunday" }];
const defaults: Record<string, { open: string; close: string; isOpen: boolean }> = { mon: { open: "09:00", close: "18:00", isOpen: true }, tue: { open: "09:00", close: "18:00", isOpen: true }, wed: { open: "09:00", close: "18:00", isOpen: true }, thu: { open: "09:00", close: "18:00", isOpen: true }, fri: { open: "09:00", close: "18:00", isOpen: true }, sat: { open: "10:00", close: "17:00", isOpen: true }, sun: { open: "09:00", close: "18:00", isOpen: false } };
export function BusinessHoursForm() {
  const [hours, setHours] = useState(defaults);
  const toggle = (key: string) => setHours(h => ({ ...h, [key]: { ...h[key], isOpen: !h[key].isOpen } }));
  const update = (key: string, field: "open"|"close", v: string) => setHours(h => ({ ...h, [key]: { ...h[key], [field]: v } }));
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      {days.map(d => (
        <div key={d.key} className={`flex items-center gap-4 p-3 rounded-lg ${hours[d.key].isOpen ? "" : "opacity-50"}`}>
          <button onClick={() => toggle(d.key)} className={`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${hours[d.key].isOpen ? "bg-brand-500" : "bg-gray-200"}`}><div className={`w-3.5 h-3.5 bg-white rounded-full shadow mx-0.5 transition-transform ${hours[d.key].isOpen ? "translate-x-4" : "translate-x-0"}`} /></button>
          <span className="text-sm font-medium text-gray-700 w-24">{d.label}</span>
          <input type="time" value={hours[d.key].open} onChange={e => update(d.key, "open", e.target.value)} disabled={!hours[d.key].isOpen} className="border border-gray-200 rounded px-2 py-1 text-sm outline-none focus:border-brand-400 disabled:bg-gray-50" />
          <span className="text-gray-400 text-sm">to</span>
          <input type="time" value={hours[d.key].close} onChange={e => update(d.key, "close", e.target.value)} disabled={!hours[d.key].isOpen} className="border border-gray-200 rounded px-2 py-1 text-sm outline-none focus:border-brand-400 disabled:bg-gray-50" />
          {!hours[d.key].isOpen && <span className="text-xs text-gray-400">Closed</span>}
        </div>
      ))}
      <div className="pt-2 flex justify-end"><button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm">Save Hours</button></div>
    </div>
  );
}

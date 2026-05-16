"use client";
import { useState } from "react";
const triggers = ["FIRST_MESSAGE","KEYWORD","INTENT","AFTER_HOURS","BOOKING_REMINDER","ORDER_PLACED","SCHEDULE"];
export function AutomationForm({ automationId }: { automationId?: string }) {
  const [trigger, setTrigger] = useState("KEYWORD");
  const [active, setActive] = useState(true);
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Automation Name *</label><input type="text" placeholder="e.g. Welcome New Customer" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label><input type="text" placeholder="Short description of what this automation does" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Trigger *</label>
        <select value={trigger} onChange={e => setTrigger(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400">
          {triggers.map(t => <option key={t} value={t}>{t.replace(/_/g," ")}</option>)}
        </select>
      </div>
      {trigger === "KEYWORD" && <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Keywords (comma-separated)</label><input type="text" placeholder="price, cost, charges" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>}
      <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Reply Message *</label><textarea rows={4} placeholder="Enter the message to send when this automation triggers..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div><div className="text-sm font-medium text-gray-700">Active</div><div className="text-xs text-gray-400">Inactive automations won't run</div></div>
        <button type="button" onClick={() => setActive(!active)} className={`w-11 h-6 rounded-full transition-colors ${active ? "bg-brand-500" : "bg-gray-200"}`}><div className={`w-4 h-4 bg-white rounded-full shadow mx-1 transition-transform ${active ? "translate-x-5" : "translate-x-0"}`} /></button>
      </div>
      <div className="flex gap-3 pt-2">
        <button type="button" className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
        <button type="submit" className="flex-1 py-2.5 bg-brand-500 hover:bg-brand-600 rounded-lg text-sm font-medium text-white">Save Automation</button>
      </div>
    </div>
  );
}

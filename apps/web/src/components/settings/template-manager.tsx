"use client";
import { Plus } from "lucide-react";
const templates = [
  { name: "booking_confirmation", category: "UTILITY", status: "APPROVED", body: "Hi {{1}}, your booking for {{2}} on {{3}} at {{4}} is confirmed. See you soon! 🎉" },
  { name: "order_shipped", category: "UTILITY", status: "APPROVED", body: "Hi {{1}}, your order #{{2}} has been shipped! Track it here: {{3}}" },
  { name: "promo_offer", category: "MARKETING", status: "PENDING", body: "Hi {{1}}, enjoy 20% off this weekend! Use code {{2}} at checkout. Valid till {{3}}." },
  { name: "appointment_reminder", category: "UTILITY", status: "APPROVED", body: "Reminder: You have an appointment at {{1}} tomorrow at {{2}}. Reply CONFIRM or CANCEL." },
];
const statusColor: Record<string, string> = { APPROVED: "bg-green-50 text-green-700", PENDING: "bg-yellow-50 text-yellow-700", REJECTED: "bg-red-50 text-red-700", DRAFT: "bg-gray-50 text-gray-600" };
export function TemplateManager() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end"><button className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-2 rounded-lg text-sm"><Plus className="w-4 h-4" />New Template</button></div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b border-gray-100"><th className="text-left px-4 py-3 text-gray-500 font-medium">Name</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Category</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Preview</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th><th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th></tr></thead>
          <tbody className="divide-y divide-gray-50">
            {templates.map(t => (
              <tr key={t.name} className="hover:bg-gray-50">
                <td className="px-4 py-3 font-mono text-xs text-gray-700">{t.name}</td>
                <td className="px-4 py-3"><span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{t.category}</span></td>
                <td className="px-4 py-3 text-gray-500 text-xs max-w-xs truncate">{t.body}</td>
                <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[t.status]}`}>{t.status}</span></td>
                <td className="px-4 py-3"><button className="text-xs text-brand-600 hover:text-brand-700 font-medium">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

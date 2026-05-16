import Link from "next/link";
import { CreditCard, FileText, BarChart2, CheckCircle } from "lucide-react";

export const metadata = { title: "Billing" };

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Billing & Subscription</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your plan, invoices, and usage.</p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-medium text-brand-100 mb-1">Current Plan</div>
            <h2 className="text-3xl font-bold mb-2">Growth Plan</h2>
            <p className="text-brand-100">₹3,999 / month · Renews Dec 31, 2024</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <CreditCard className="w-6 h-6" />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6">
          <button className="bg-white text-brand-600 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-brand-50 transition-colors">
            Upgrade Plan
          </button>
          <button className="border border-white/30 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors">
            Manage Billing
          </button>
        </div>
      </div>

      {/* Usage */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Current Period Usage</h3>
        <div className="space-y-4">
          {[
            { label: "AI Messages", used: 1847, total: 2500, unit: "messages" },
            { label: "Team Members", used: 3, total: 5, unit: "seats" },
            { label: "Catalog Items", used: 47, total: 500, unit: "items" },
          ].map((u) => (
            <div key={u.label}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-gray-700">{u.label}</span>
                <span className="text-gray-500">{u.used.toLocaleString()} / {u.total.toLocaleString()} {u.unit}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${u.used / u.total > 0.8 ? "bg-red-500" : "bg-brand-500"}`}
                  style={{ width: `${Math.min((u.used / u.total) * 100, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/dashboard/billing/invoices" className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:border-brand-300 hover:shadow-sm transition-all">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Invoices</div>
            <div className="text-sm text-gray-500">View billing history</div>
          </div>
        </Link>
        <Link href="/dashboard/billing/usage" className="flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 hover:border-brand-300 hover:shadow-sm transition-all">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Usage Details</div>
            <div className="text-sm text-gray-500">Detailed usage breakdown</div>
          </div>
        </Link>
      </div>

      {/* Plan comparison */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Your Plan Includes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "2,500 AI messages per month",
            "FAQ bot with unlimited entries",
            "Booking & appointment management",
            "WhatsApp catalog & ordering",
            "Human handoff with full history",
            "Advanced analytics dashboard",
            "5 team members",
            "Priority email support",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

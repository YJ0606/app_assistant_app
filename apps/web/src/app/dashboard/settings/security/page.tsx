"use client";
import { Shield, Key, Smartphone, Clock } from "lucide-react";
export default function SecuritySettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Security</h1><p className="text-gray-500 text-sm mt-1">Manage your account security settings.</p></div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <h3 className="font-semibold text-gray-900">Change Password</h3>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Current Password</label><input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">New Password</label><input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm New Password</label><input type="password" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
        <button className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm">Update Password</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
        {[
          { icon: Smartphone, title: "Two-Factor Authentication", desc: "Add an extra layer of security with 2FA", action: "Enable 2FA", color: "text-brand-500 bg-brand-50" },
          { icon: Key, title: "API Keys", desc: "Manage API keys for integrations", action: "Manage Keys", color: "text-blue-500 bg-blue-50" },
          { icon: Clock, title: "Active Sessions", desc: "View and revoke active login sessions", action: "View Sessions", color: "text-purple-500 bg-purple-50" },
          { icon: Shield, title: "Audit Log", desc: "View all account activity and changes", action: "View Log", color: "text-orange-500 bg-orange-50" },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-center gap-4 px-5 py-4">
              <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}><Icon className="w-5 h-5" /></div>
              <div className="flex-1"><div className="text-sm font-medium text-gray-900">{item.title}</div><div className="text-xs text-gray-500">{item.desc}</div></div>
              <button className="text-sm text-brand-600 font-medium hover:text-brand-700">{item.action} →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

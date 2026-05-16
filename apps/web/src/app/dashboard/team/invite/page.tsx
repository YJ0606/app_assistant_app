"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
export default function InviteTeamMemberPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSent(true); }, 1500); };
  return (
    <div className="max-w-lg space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Invite Team Member</h1><p className="text-gray-500 text-sm mt-1">Send an invite to add a new team member.</p></div>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        {sent ? (
          <div className="text-center py-4"><div className="text-4xl mb-4">📧</div><h3 className="text-lg font-bold text-gray-900 mb-2">Invitation sent!</h3><p className="text-gray-500 text-sm mb-4">The invite link has been emailed to the recipient.</p><Link href="/dashboard/team" className="text-brand-600 font-medium text-sm">Back to Team →</Link></div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label><input type="email" required placeholder="colleague@company.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Role *</label>
              <select required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400">
                <option value="AGENT">Agent – Handle conversations</option>
                <option value="ADMIN">Admin – Manage settings</option>
                <option value="VIEWER">Viewer – View only</option>
              </select>
            </div>
            <div className="pt-2 flex gap-3">
              <Link href="/dashboard/team" className="flex-1 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 text-center hover:bg-gray-50">Cancel</Link>
              <button type="submit" disabled={loading} className="flex-1 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">{loading && <Loader2 className="w-4 h-4 animate-spin" />}{loading ? "Sending..." : "Send Invite"}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Plus, Mail } from "lucide-react";

export const metadata = { title: "Team" };

const members = [
  { id: "1", name: "Arjun Mehta", email: "arjun@business.com", role: "OWNER", status: "Active", lastLogin: "Today" },
  { id: "2", name: "Priya Singh", email: "priya@business.com", role: "ADMIN", status: "Active", lastLogin: "Yesterday" },
  { id: "3", name: "Ravi Kumar", email: "ravi@business.com", role: "AGENT", status: "Active", lastLogin: "2 days ago" },
  { id: "4", name: "Anita Sharma", email: "anita@business.com", role: "AGENT", status: "Pending", lastLogin: "—" },
];

const roleColor: Record<string, string> = {
  OWNER: "bg-purple-50 text-purple-700",
  ADMIN: "bg-blue-50 text-blue-700",
  AGENT: "bg-gray-50 text-gray-700",
  VIEWER: "bg-yellow-50 text-yellow-700",
};

export default function TeamPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-500 text-sm mt-1">Manage team members and their access levels.</p>
        </div>
        <Link href="/dashboard/team/invite" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 px-4 py-2 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          Invite Member
        </Link>
      </div>

      {/* Usage */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Team members: <strong className="text-gray-900">3 of 5</strong> used</span>
          <div className="w-32 bg-gray-100 rounded-full h-2">
            <div className="bg-brand-500 h-2 rounded-full" style={{ width: "60%" }} />
          </div>
        </div>
      </div>

      {/* Members table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Member</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Role</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Status</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Last Login</th>
              <th className="text-left px-4 py-3 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {members.map((m) => (
              <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{m.name}</div>
                      <div className="text-xs text-gray-400">{m.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${roleColor[m.role]}`}>
                    {m.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-medium ${m.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>
                    {m.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500 text-xs">{m.lastLogin}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1">
                    {m.status === "Pending" && (
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    )}
                    {m.role !== "OWNER" && (
                      <button className="text-xs text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-red-50">
                        Remove
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

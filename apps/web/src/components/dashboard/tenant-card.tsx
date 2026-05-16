import { Building2, Users, MessageSquare } from "lucide-react";
interface TenantCardProps { name: string; plan: string; messagesUsed: number; messagesTotal: number; teamSize: number; status: string; }
export function TenantCard({ name, plan, messagesUsed, messagesTotal, teamSize, status }: TenantCardProps) {
  const pct = Math.round((messagesUsed / messagesTotal) * 100);
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center"><Building2 className="w-5 h-5 text-white" /></div>
          <div><div className="font-semibold text-gray-900">{name}</div><div className="text-xs text-gray-400">{plan} Plan</div></div>
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${status === "ACTIVE" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>{status}</span>
      </div>
      <div className="space-y-3">
        <div><div className="flex justify-between text-xs text-gray-500 mb-1"><span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />Messages</span><span>{messagesUsed.toLocaleString()} / {messagesTotal.toLocaleString()}</span></div><div className="w-full bg-gray-100 rounded-full h-1.5"><div className={`h-1.5 rounded-full ${pct > 80 ? "bg-red-500" : "bg-brand-500"}`} style={{ width: `${pct}%` }} /></div></div>
        <div className="flex items-center gap-1 text-xs text-gray-500"><Users className="w-3 h-3" />{teamSize} team members</div>
      </div>
    </div>
  );
}

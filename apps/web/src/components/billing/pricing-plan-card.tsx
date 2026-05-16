import { Check } from "lucide-react";
interface PricingPlanCardProps { planId: string; name: string; price: number; features: string[]; popular?: boolean; current?: boolean; onSelect?: () => void; }
export function PricingPlanCard({ name, price, features, popular, current, onSelect }: PricingPlanCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl border p-6 flex flex-col ${popular ? "border-brand-500 shadow-xl" : "border-gray-200"} ${current ? "ring-2 ring-brand-500" : ""}`}>
      {popular && !current && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
      {current && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full">Current Plan</div>}
      <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
      <div className="text-3xl font-extrabold text-gray-900 mb-4">₹{price.toLocaleString("en-IN")}<span className="text-base font-normal text-gray-500">/mo</span></div>
      <ul className="space-y-2 flex-1 mb-6">{features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-brand-500 flex-shrink-0" />{f}</li>)}</ul>
      <button onClick={onSelect} disabled={current} className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${current ? "bg-gray-100 text-gray-400 cursor-not-allowed" : popular ? "bg-brand-500 hover:bg-brand-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}>{current ? "Current Plan" : "Switch to This Plan"}</button>
    </div>
  );
}

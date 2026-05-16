import Link from "next/link";
import { Check } from "lucide-react";
const plans = [
  { id: "starter", name: "Starter", price: 1499, msgs: 500, seats: 2, features: ["500 AI messages/month","FAQ bot","Basic analytics","2 team members","Email support"] },
  { id: "growth", name: "Growth", price: 3999, msgs: 2500, seats: 5, popular: true, features: ["2,500 AI messages/month","FAQ + Booking + Orders","Advanced analytics","Human handoff","5 team members","Priority support"] },
  { id: "pro", name: "Pro", price: 9999, msgs: 10000, seats: -1, features: ["10,000 AI messages/month","All Growth features","Multi-tenant","Custom automations","Unlimited team","Dedicated support"] },
];
export default function SelectPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8"><div className="text-sm text-gray-400 mb-1">Step 7 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full w-full" /></div></div>
        <div className="text-center mb-10"><h1 className="text-3xl font-extrabold text-gray-900 mb-2">Choose Your Plan</h1><p className="text-gray-500">Start free for 14 days. Cancel anytime.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div key={plan.id} className={`bg-white rounded-2xl border p-6 flex flex-col relative ${plan.popular ? "border-brand-500 shadow-xl" : "border-gray-200"}`}>
              {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>}
              <div className="mb-5"><h3 className="text-lg font-bold text-gray-900">{plan.name}</h3><div className="text-3xl font-extrabold text-gray-900 mt-2">₹{plan.price.toLocaleString("en-IN")}<span className="text-base font-normal text-gray-500">/mo</span></div></div>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><Check className="w-4 h-4 text-brand-500 flex-shrink-0" />{f}</li>)}
              </ul>
              <Link href="/dashboard" className={`w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${plan.popular ? "bg-brand-500 hover:bg-brand-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}>
                Start Free Trial
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6"><Link href="/dashboard" className="text-sm text-gray-400 hover:text-gray-600">Skip – Start with free trial →</Link></div>
      </div>
    </div>
  );
}

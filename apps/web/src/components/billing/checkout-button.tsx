"use client";
import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";
export function CheckoutButton({ planId, planName }: { planId: string; planName: string }) {
  const [loading, setLoading] = useState(false);
  const handleCheckout = async () => {
    setLoading(true);
    // In production: call /api/v1/billing/checkout then redirect to Razorpay
    setTimeout(() => { setLoading(false); alert(`Redirecting to checkout for ${planName}...`); }, 1000);
  };
  return (
    <button onClick={handleCheckout} disabled={loading} className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
      {loading ? "Processing..." : `Upgrade to ${planName}`}
    </button>
  );
}

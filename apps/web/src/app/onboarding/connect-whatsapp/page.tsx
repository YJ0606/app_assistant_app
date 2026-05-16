"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
export default function ConnectWhatsAppPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleConnect = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep(2); }, 2000);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="mb-6"><div className="text-sm text-gray-400 mb-1">Step 2 of 7</div><div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-brand-500 h-1.5 rounded-full" style={{ width: "28%" }} /></div></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Connect WhatsApp</h1>
          <p className="text-gray-500 text-sm mb-6">Link your WhatsApp Business API account to get started.</p>
          {step === 1 ? (
            <div className="space-y-5">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number ID</label><input type="text" placeholder="123456789" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">WABA ID</label><input type="text" placeholder="987654321" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Access Token</label><input type="password" placeholder="EAABwzLixnjYBA..." className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
                <strong>Webhook URL to add in Meta:</strong><br/><code className="text-xs">https://api.waai.app/v1/webhooks/whatsapp/your-tenant</code>
              </div>
              <button onClick={handleConnect} disabled={loading} className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">{loading && <Loader2 className="w-4 h-4 animate-spin" />}{loading ? "Connecting..." : "Connect WhatsApp"}</button>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-brand-500 mx-auto" />
              <h3 className="text-xl font-bold text-gray-900">WhatsApp Connected!</h3>
              <p className="text-gray-500 text-sm">Your WhatsApp Business account is now linked to WaAI.</p>
              <Link href="/onboarding/setup-faq" className="w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm">Continue <ArrowRight className="w-4 h-4" /></Link>
            </div>
          )}
          {step === 1 && <div className="mt-4"><Link href="/onboarding/setup-faq" className="text-sm text-gray-400 hover:text-gray-600">Skip for now →</Link></div>}
        </div>
      </div>
    </div>
  );
}

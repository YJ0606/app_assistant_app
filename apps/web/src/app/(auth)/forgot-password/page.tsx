"use client";
import { useState } from "react";
import Link from "next/link";
import { Loader2, ArrowLeft } from "lucide-react";
export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8"><div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center"><span className="text-white font-bold text-lg">W</span></div><span className="font-bold text-2xl text-gray-900">WaAI</span></div>
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          {sent ? (
            <div className="text-center"><div className="text-5xl mb-4">📧</div><h2 className="text-xl font-bold text-gray-900 mb-2">Check your email</h2><p className="text-gray-500 text-sm mb-6">We've sent a password reset link to your email address.</p><Link href="/login" className="text-brand-600 font-medium text-sm">Back to login</Link></div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Forgot password?</h1>
              <p className="text-gray-500 text-sm mb-6">Enter your email and we'll send a reset link.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" required placeholder="you@company.com" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100" /></div>
                <button type="submit" disabled={loading} className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">{loading && <Loader2 className="w-4 h-4 animate-spin" />}{loading ? "Sending..." : "Send Reset Link"}</button>
              </form>
              <div className="mt-4 text-center"><Link href="/login" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1"><ArrowLeft className="w-4 h-4" />Back to login</Link></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

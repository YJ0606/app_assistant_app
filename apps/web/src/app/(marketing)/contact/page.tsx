"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-500">We'd love to hear from you. Our team responds within 24 hours.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center"><Mail className="w-6 h-6 text-brand-500" /></div>
              <div><div className="font-semibold text-gray-900">Email</div><div className="text-gray-500">support@waai.app</div></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center"><Phone className="w-6 h-6 text-brand-500" /></div>
              <div><div className="font-semibold text-gray-900">WhatsApp</div><div className="text-gray-500">+91 98765 43210</div></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center"><MapPin className="w-6 h-6 text-brand-500" /></div>
              <div><div className="font-semibold text-gray-900">Office</div><div className="text-gray-500">Bangalore, Karnataka, India</div></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                <p className="text-gray-500">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Name</label><input type="text" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
                </div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Subject</label><input type="text" required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Message</label><textarea rows={4} required className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brand-400 resize-none" /></div>
                <button type="submit" disabled={loading} className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}{loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

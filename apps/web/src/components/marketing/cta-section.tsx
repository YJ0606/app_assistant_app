"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 bg-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to Automate Your WhatsApp?
        </h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Start your 14-day free trial today. No credit card required.
          Setup in under 30 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-brand-50 transition-all shadow-lg"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
          >
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

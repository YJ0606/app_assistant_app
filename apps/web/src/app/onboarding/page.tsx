import Link from "next/link";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

export const metadata = { title: "Onboarding" };

const steps = [
  { id: 1, title: "Business Details", description: "Tell us about your business", href: "/onboarding/business-details", completed: false },
  { id: 2, title: "Connect WhatsApp", description: "Link your WhatsApp Business API", href: "/onboarding/connect-whatsapp", completed: false },
  { id: 3, title: "Setup FAQ", description: "Add your most common questions", href: "/onboarding/setup-faq", completed: false },
  { id: 4, title: "Upload Catalog", description: "Add products or services", href: "/onboarding/upload-catalog", completed: false },
  { id: 5, title: "Configure Booking", description: "Set up appointment scheduling", href: "/onboarding/configure-booking", completed: false },
  { id: 6, title: "Setup Ordering", description: "Enable WhatsApp commerce", href: "/onboarding/configure-ordering", completed: false },
  { id: 7, title: "Choose Plan", description: "Select your subscription plan", href: "/onboarding/select-plan", completed: false },
];

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-bold text-2xl text-gray-900">WaAI</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Let's set up your account</h1>
          <p className="text-gray-500 text-sm mt-1">Complete these steps to get your AI assistant running.</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="space-y-3">
            {steps.map((step, index) => (
              <Link
                key={step.id}
                href={step.href}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all group"
              >
                <div className="flex-shrink-0">
                  {step.completed ? (
                    <CheckCircle className="w-6 h-6 text-brand-500" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:border-brand-400 group-hover:text-brand-500 transition-colors">
                      {step.id}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/dashboard"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Skip for now → Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

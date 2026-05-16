import Link from "next/link";
import { Building2, MessageSquare, FileText, Clock, Bell, Shield, ChevronRight } from "lucide-react";

export const metadata = { title: "Settings" };

const settingsSections = [
  {
    href: "/dashboard/settings/business",
    icon: Building2,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    title: "Business Profile",
    description: "Update your business name, logo, address, and contact details.",
  },
  {
    href: "/dashboard/settings/whatsapp",
    icon: MessageSquare,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    title: "WhatsApp Configuration",
    description: "Manage your WhatsApp Business API credentials and settings.",
  },
  {
    href: "/dashboard/settings/templates",
    icon: FileText,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-500",
    title: "Message Templates",
    description: "Create and manage approved WhatsApp message templates.",
  },
  {
    href: "/dashboard/settings/business-hours",
    icon: Clock,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    title: "Business Hours",
    description: "Set your operating hours for AI auto-responses.",
  },
  {
    href: "/dashboard/settings/notifications",
    icon: Bell,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    title: "Notifications",
    description: "Configure email and push notification preferences.",
  },
  {
    href: "/dashboard/settings/security",
    icon: Shield,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    title: "Security",
    description: "Two-factor authentication, password, and access logs.",
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account and business preferences.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors"
            >
              <div className={`w-10 h-10 ${section.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${section.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900">{section.title}</div>
                <div className="text-sm text-gray-500 mt-0.5">{section.description}</div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import { WhatsAppConfigForm } from "@/components/settings/whatsapp-config-form";

export const metadata = { title: "WhatsApp Configuration" };

export default function WhatsAppSettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">WhatsApp Configuration</h1>
        <p className="text-gray-500 text-sm mt-1">Connect your WhatsApp Business API account.</p>
      </div>
      <WhatsAppConfigForm />
    </div>
  );
}

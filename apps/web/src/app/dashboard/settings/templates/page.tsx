import { TemplateManager } from "@/components/settings/template-manager";
export const metadata = { title: "Message Templates" };
export default function TemplatesSettingsPage() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Message Templates</h1><p className="text-gray-500 text-sm mt-1">Create and manage approved WhatsApp templates.</p></div>
      <TemplateManager />
    </div>
  );
}

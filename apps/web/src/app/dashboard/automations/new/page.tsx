import { AutomationForm } from "@/components/automations/automation-form";
export const metadata = { title: "New Automation" };
export default function NewAutomationPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">New Automation</h1><p className="text-gray-500 text-sm mt-1">Build a rule to automate WhatsApp responses.</p></div>
      <AutomationForm />
    </div>
  );
}

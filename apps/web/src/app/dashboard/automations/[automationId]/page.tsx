import { AutomationForm } from "@/components/automations/automation-form";
export default function EditAutomationPage({ params }: { params: { automationId: string } }) {
  return (
    <div className="max-w-2xl space-y-6">
      <div><h1 className="text-2xl font-bold text-gray-900">Edit Automation</h1><p className="text-gray-500 text-sm mt-1">Modify this automation rule.</p></div>
      <AutomationForm automationId={params.automationId} />
    </div>
  );
}

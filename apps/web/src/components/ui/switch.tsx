"use client";
interface SwitchProps { checked: boolean; onChange: (v: boolean) => void; label?: string; description?: string; }
export function Switch({ checked, onChange, label, description }: SwitchProps) {
  return (
    <div className="flex items-center justify-between">
      {(label || description) && <div><div className="text-sm font-medium text-gray-700">{label}</div>{description && <div className="text-xs text-gray-400">{description}</div>}</div>}
      <button type="button" role="switch" aria-checked={checked} onClick={() => onChange(!checked)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1 ${checked ? "bg-brand-500" : "bg-gray-200"}`}>
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}

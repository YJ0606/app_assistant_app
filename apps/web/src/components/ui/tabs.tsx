"use client";
import { useState } from "react";
interface Tab { id: string; label: string; }
interface TabsProps { tabs: Tab[]; defaultTab?: string; onChange?: (id: string) => void; children: (activeTab: string) => React.ReactNode; }
export function Tabs({ tabs, defaultTab, onChange, children }: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const handleChange = (id: string) => { setActive(id); onChange?.(id); };
  return (
    <div>
      <div className="flex gap-1 border-b border-gray-200 mb-6">
        {tabs.map(t => (
          <button key={t.id} onClick={() => handleChange(t.id)} className={`px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${active === t.id ? "border-brand-500 text-brand-600" : "border-transparent text-gray-500 hover:text-gray-700"}`}>{t.label}</button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}

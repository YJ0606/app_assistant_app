"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
interface DropdownItem { label: string; onClick: () => void; icon?: React.ReactNode; danger?: boolean; }
interface DropdownProps { trigger: React.ReactNode; items: DropdownItem[]; align?: "left" | "right"; }
export function Dropdown({ trigger, items, align = "right" }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">{trigger}</div>
      {open && (
        <div className={`absolute top-full mt-1 z-20 bg-white rounded-xl border border-gray-200 shadow-lg py-1 min-w-40 ${align === "right" ? "right-0" : "left-0"}`}>
          {items.map((item, i) => (
            <button key={i} onClick={() => { item.onClick(); setOpen(false); }} className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${item.danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"}`}>
              {item.icon}{item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

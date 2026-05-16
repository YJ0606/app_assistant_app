"use client";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
interface Slot { id: string; date: string; startTime: string; endTime: string; capacity: number; }
const initialSlots: Slot[] = [
  { id: "1", date: "2024-12-20", startTime: "09:00", endTime: "09:45", capacity: 1 },
  { id: "2", date: "2024-12-20", startTime: "10:00", endTime: "10:45", capacity: 1 },
  { id: "3", date: "2024-12-20", startTime: "14:00", endTime: "14:45", capacity: 1 },
];
export function SlotManager() {
  const [slots, setSlots] = useState<Slot[]>(initialSlots);
  const remove = (id: string) => setSlots(s => s.filter(slot => slot.id !== id));
  const add = () => setSlots(s => [...s, { id: Date.now().toString(), date: new Date().toISOString().split("T")[0], startTime: "09:00", endTime: "09:45", capacity: 1 }]);
  return (
    <div className="space-y-3">
      {slots.map(slot => (
        <div key={slot.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
          <input type="date" defaultValue={slot.date} className="border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-brand-400" />
          <input type="time" defaultValue={slot.startTime} className="border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-brand-400" />
          <span className="text-gray-400 text-sm">to</span>
          <input type="time" defaultValue={slot.endTime} className="border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-brand-400" />
          <input type="number" defaultValue={slot.capacity} min={1} className="w-16 border border-gray-200 rounded px-2 py-1.5 text-sm outline-none focus:border-brand-400" />
          <button onClick={() => remove(slot.id)} className="p-1.5 text-gray-400 hover:text-red-500 rounded"><Trash2 className="w-4 h-4" /></button>
        </div>
      ))}
      <button onClick={add} className="flex items-center gap-2 text-sm text-brand-600 font-medium hover:text-brand-700"><Plus className="w-4 h-4" />Add Slot</button>
    </div>
  );
}

"use client";
const hours = Array.from({ length: 11 }, (_, i) => i + 8); // 8AM to 6PM
const days = ["Mon 20", "Tue 21", "Wed 22", "Thu 23", "Fri 24", "Sat 25"];
const events = [
  { day: 0, hour: 9, name: "Priya Sharma", service: "Haircut", color: "bg-brand-500" },
  { day: 0, hour: 10, name: "Rahul Kumar", service: "Color", color: "bg-purple-500" },
  { day: 1, hour: 11, name: "Anita Patel", service: "Keratin", color: "bg-purple-500" },
  { day: 2, hour: 14, name: "Deepak Shah", service: "Haircut", color: "bg-brand-500" },
  { day: 3, hour: 15, name: "Sunita Rao", service: "Beard", color: "bg-blue-500" },
  { day: 4, hour: 10, name: "Kiran Joshi", service: "Color", color: "bg-purple-500" },
];
export function BookingCalendar() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-auto">
      <div className="grid" style={{ gridTemplateColumns: "60px repeat(6, 1fr)" }}>
        <div className="border-b border-r border-gray-100 p-2" />
        {days.map(d => <div key={d} className="border-b border-r border-gray-100 p-2 text-center text-xs font-semibold text-gray-600">{d}</div>)}
        {hours.map(hour => (
          <>
            <div key={`h-${hour}`} className="border-b border-r border-gray-100 p-2 text-xs text-gray-400 text-right">{hour}:00</div>
            {days.map((d, di) => {
              const ev = events.find(e => e.day === di && e.hour === hour);
              return (
                <div key={`${hour}-${di}`} className="border-b border-r border-gray-100 p-1 min-h-12 relative">
                  {ev && <div className={`${ev.color} text-white text-xs rounded p-1 leading-tight`}><div className="font-semibold truncate">{ev.name}</div><div className="opacity-80">{ev.service}</div></div>}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}

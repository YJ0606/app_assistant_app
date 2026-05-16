import { Zap } from "lucide-react";

export function UsageWidget() {
  const used = 1847;
  const total = 2500;
  const percentage = Math.round((used / total) * 100);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-yellow-500" />
        <h3 className="font-semibold text-gray-900">Monthly Usage</h3>
      </div>

      {/* Donut-style progress */}
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-36 h-36">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#25D366"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-xs text-gray-400">used</span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{used.toLocaleString()}</p>
          <p className="text-sm text-gray-500">of {total.toLocaleString()} messages</p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-2 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">AI messages</span>
          <span className="font-medium text-gray-900">1,284</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Template sends</span>
          <span className="font-medium text-gray-900">412</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Manual replies</span>
          <span className="font-medium text-gray-900">151</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Resets in</span>
          <span className="font-medium text-gray-900">14 days</span>
        </div>
      </div>
    </div>
  );
}

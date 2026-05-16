import { forwardRef, SelectHTMLAttributes } from "react";
import { clsx } from "clsx";
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { label?: string; error?: string; options: { value: string; label: string }[]; }
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ label, error, options, className, ...props }, ref) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
    <select ref={ref} className={clsx("w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors bg-white", error ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100", className)} {...props}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
));
Select.displayName = "Select";

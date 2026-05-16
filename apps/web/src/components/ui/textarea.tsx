import { forwardRef, TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; error?: string; hint?: string; }
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, error, hint, className, ...props }, ref) => (
  <div className="w-full">
    {label && <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
    <textarea ref={ref} rows={3} className={clsx("w-full border rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors resize-none", error ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-100", className)} {...props} />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    {hint && !error && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
  </div>
));
Textarea.displayName = "Textarea";

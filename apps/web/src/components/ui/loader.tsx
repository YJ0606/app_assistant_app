import { Loader2 } from "lucide-react";
export function Loader({ size = "md", text }: { size?: "sm" | "md" | "lg"; text?: string }) {
  const s = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-12 h-12" }[size];
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-12">
      <Loader2 className={`${s} animate-spin text-brand-500`} />
      {text && <p className="text-sm text-gray-500">{text}</p>}
    </div>
  );
}
export function PageLoader() {
  return <div className="fixed inset-0 bg-white flex items-center justify-center z-50"><Loader size="lg" text="Loading..." /></div>;
}

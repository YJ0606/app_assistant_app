export function Table({ children }: { children: React.ReactNode }) {
  return <div className="overflow-x-auto"><table className="w-full text-sm">{children}</table></div>;
}
export function TableHead({ children }: { children: React.ReactNode }) {
  return <thead><tr className="bg-gray-50 border-b border-gray-100">{children}</tr></thead>;
}
export function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-4 py-3 text-gray-500 font-medium whitespace-nowrap">{children}</th>;
}
export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody className="divide-y divide-gray-50">{children}</tbody>;
}
export function Tr({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return <tr onClick={onClick} className={`hover:bg-gray-50 transition-colors ${onClick ? "cursor-pointer" : ""}`}>{children}</tr>;
}
export function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 ${className ?? ""}`}>{children}</td>;
}

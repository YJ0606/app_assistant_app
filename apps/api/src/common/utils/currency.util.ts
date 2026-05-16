export function paise(rupees: number): number { return Math.round(rupees * 100); }
export function rupees(paise: number): number { return paise / 100; }
export function formatINR(amount: number): string { return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(amount); }

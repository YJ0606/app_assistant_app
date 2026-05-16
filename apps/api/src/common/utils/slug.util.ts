export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
}
export function uniqueSlug(base: string, suffix?: string): string {
  const s = suffix ?? Math.random().toString(36).slice(2, 7);
  return `${generateSlug(base)}-${s}`;
}

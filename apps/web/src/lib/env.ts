export const env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
  NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? "http://localhost:3000",
} as const;

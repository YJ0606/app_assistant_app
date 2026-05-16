import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/query-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { TenantProvider } from "@/providers/tenant-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WaAI – WhatsApp AI Assistant for Business",
    template: "%s | WaAI",
  },
  description:
    "Automate customer conversations on WhatsApp. Manage FAQs, bookings, orders, and more – powered by AI.",
  keywords: ["WhatsApp", "AI", "chatbot", "business", "automation", "booking", "orders"],
  authors: [{ name: "WaAI Team" }],
  openGraph: {
    title: "WaAI – WhatsApp AI Assistant",
    description: "Automate and supercharge your WhatsApp business conversations",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <AuthProvider>
            <TenantProvider>
              <Providers>
                {children}
                <Toaster
                  position="top-right"
                  toastOptions={{
                    duration: 4000,
                    style: {
                      background: "#1f2937",
                      color: "#f9fafb",
                      borderRadius: "8px",
                    },
                    success: {
                      iconTheme: { primary: "#25D366", secondary: "#fff" },
                    },
                  }}
                />
              </Providers>
            </TenantProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

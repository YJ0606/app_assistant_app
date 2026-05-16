"use client";
import { createContext, useContext, useState } from "react";

interface Tenant {
  id: string;
  name: string;
  slug: string;
  status: string;
  logoUrl?: string;
  brandColor?: string;
}

interface TenantContextValue {
  tenant: Tenant | null;
  setTenant: (t: Tenant) => void;
}

const TenantContext = createContext<TenantContextValue | null>(null);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>({
    id: "ten_1",
    name: "My Business",
    slug: "my-business",
    status: "ACTIVE",
    brandColor: "#25D366",
  });

  return (
    <TenantContext.Provider value={{ tenant, setTenant }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenant() {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used inside TenantProvider");
  return ctx;
}

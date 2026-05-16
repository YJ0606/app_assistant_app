import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Tenant } from "@/types/tenant";

interface TenantState {
  tenant: Tenant | null;
  setTenant: (tenant: Tenant | null) => void;
}

export const useTenantStore = create<TenantState>()(
  persist(
    (set) => ({
      tenant: null,
      setTenant: (tenant) => set({ tenant }),
    }),
    { name: "waai-tenant", partialize: (s) => ({ tenant: s.tenant }) }
  )
);

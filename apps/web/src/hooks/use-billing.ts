import { useQuery, useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import type { Subscription, Invoice, UsageRecord } from "@/types/billing";

export function useSubscription() {
  return useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Subscription }>("/billing/subscription");
      return data.data;
    },
  });
}

export function useInvoices() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: Invoice[] }>("/billing/invoices");
      return data.data;
    },
  });
}

export function useUsage(period?: string) {
  return useQuery({
    queryKey: ["usage", period],
    queryFn: async () => {
      const { data } = await apiClient.get<{ data: UsageRecord }>("/billing/usage", { params: { period } });
      return data.data;
    },
  });
}

export function useCreateCheckout() {
  return useMutation({
    mutationFn: async (planId: string) => {
      const { data } = await apiClient.post("/billing/checkout", { planId });
      return data;
    },
  });
}

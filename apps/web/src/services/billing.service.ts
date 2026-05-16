import apiClient from "@/lib/api-client";
export const billingService = {
  async getSubscription() { const { data } = await apiClient.get("/billing/subscription"); return data.data; },
  async getInvoices() { const { data } = await apiClient.get("/billing/invoices"); return data.data; },
  async getUsage(period?: string) { const { data } = await apiClient.get("/billing/usage", { params: { period } }); return data.data; },
  async createCheckout(planId: string) { const { data } = await apiClient.post("/billing/checkout", { planId }); return data.data; },
  async cancelSubscription() { const { data } = await apiClient.post("/billing/cancel", {}); return data.data; },
};

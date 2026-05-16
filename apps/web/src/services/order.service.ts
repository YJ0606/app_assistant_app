import apiClient from "@/lib/api-client";
export const orderService = {
  async list(params?: Record<string, string>) { const { data } = await apiClient.get("/orders", { params }); return data.data; },
  async get(id: string) { const { data } = await apiClient.get(`/orders/${id}`); return data.data; },
  async updateStatus(id: string, status: string) { const { data } = await apiClient.patch(`/orders/${id}/status`, { status }); return data.data; },
};

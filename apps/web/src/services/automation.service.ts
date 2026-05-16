import apiClient from "@/lib/api-client";
export const automationService = {
  async list() { const { data } = await apiClient.get("/automations"); return data.data; },
  async get(id: string) { const { data } = await apiClient.get(`/automations/${id}`); return data.data; },
  async create(payload: unknown) { const { data } = await apiClient.post("/automations", payload); return data.data; },
  async update(id: string, payload: unknown) { const { data } = await apiClient.patch(`/automations/${id}`, payload); return data.data; },
  async toggle(id: string, isActive: boolean) { const { data } = await apiClient.patch(`/automations/${id}/toggle`, { isActive }); return data.data; },
  async delete(id: string) { await apiClient.delete(`/automations/${id}`); },
};

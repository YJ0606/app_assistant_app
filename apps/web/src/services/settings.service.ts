import apiClient from "@/lib/api-client";
export const settingsService = {
  async getWhatsAppConfig() { const { data } = await apiClient.get("/settings/whatsapp"); return data.data; },
  async saveWhatsAppConfig(payload: unknown) { const { data } = await apiClient.post("/settings/whatsapp", payload); return data.data; },
  async testWhatsAppConnection() { const { data } = await apiClient.post("/settings/whatsapp/test", {}); return data.data; },
  async getBusinessHours() { const { data } = await apiClient.get("/tenants/me"); return data.data?.businessHours; },
  async saveBusinessHours(hours: unknown) { const { data } = await apiClient.patch("/tenants/me", { businessHours: hours }); return data.data; },
  async getTemplates() { const { data } = await apiClient.get("/templates"); return data.data; },
  async createTemplate(payload: unknown) { const { data } = await apiClient.post("/templates", payload); return data.data; },
};

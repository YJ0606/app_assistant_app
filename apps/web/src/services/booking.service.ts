import apiClient from "@/lib/api-client";
export const bookingService = {
  async list(params?: Record<string, string>) { const { data } = await apiClient.get("/bookings", { params }); return data.data; },
  async get(id: string) { const { data } = await apiClient.get(`/bookings/${id}`); return data.data; },
  async update(id: string, payload: unknown) { const { data } = await apiClient.patch(`/bookings/${id}`, payload); return data.data; },
  async confirm(id: string) { const { data } = await apiClient.patch(`/bookings/${id}`, { status: "CONFIRMED" }); return data.data; },
  async cancel(id: string, reason?: string) { const { data } = await apiClient.patch(`/bookings/${id}`, { status: "CANCELLED", notes: reason }); return data.data; },
  async getSlots(date: string) { const { data } = await apiClient.get("/bookings/slots", { params: { date } }); return data.data; },
};

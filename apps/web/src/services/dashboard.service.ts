import apiClient from "@/lib/api-client";
export const dashboardService = {
  async getMetrics() {
    const { data } = await apiClient.get("/dashboard");
    return data.data;
  },
};

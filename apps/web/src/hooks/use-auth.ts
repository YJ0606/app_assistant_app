import { useQuery, useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { setToken, clearToken } from "@/lib/auth";
import type { LoginDto, RegisterDto, AuthTokens, AuthUser } from "@/types/auth";

export function useMe() {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: async () => {
      const { data } = await apiClient.get<AuthUser>("/auth/me");
      return data;
    },
    retry: false,
    staleTime: 1000 * 60 * 10,
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: async (dto: LoginDto) => {
      const { data } = await apiClient.post<{ data: AuthTokens }>("/auth/login", dto);
      return data.data;
    },
    onSuccess: (tokens) => {
      setToken(tokens.accessToken);
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: async (dto: RegisterDto) => {
      const { data } = await apiClient.post<{ data: AuthTokens }>("/auth/register", dto);
      return data.data;
    },
    onSuccess: (tokens) => {
      setToken(tokens.accessToken);
    },
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      await apiClient.post("/auth/logout");
    },
    onSuccess: () => {
      clearToken();
      window.location.href = "/login";
    },
  });
}

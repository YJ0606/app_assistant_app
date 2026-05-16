export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("waai_access_token");
}

export function setToken(token: string): void {
  localStorage.setItem("waai_access_token", token);
}

export function clearToken(): void {
  localStorage.removeItem("waai_access_token");
  localStorage.removeItem("waai_user");
}

export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

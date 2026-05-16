import type { UserRole } from "@/types/auth";

const roleHierarchy: Record<UserRole, number> = {
  OWNER: 4,
  ADMIN: 3,
  AGENT: 2,
  VIEWER: 1,
};

export function hasRole(userRole: UserRole, requiredRole: UserRole): boolean {
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

export const permissions = {
  canManageSettings: (role: UserRole) => hasRole(role, "ADMIN"),
  canManageTeam: (role: UserRole) => hasRole(role, "ADMIN"),
  canManageBilling: (role: UserRole) => hasRole(role, "OWNER"),
  canEditFAQ: (role: UserRole) => hasRole(role, "AGENT"),
  canEditCatalog: (role: UserRole) => hasRole(role, "AGENT"),
  canViewAnalytics: (role: UserRole) => hasRole(role, "VIEWER"),
  canHandleConversations: (role: UserRole) => hasRole(role, "AGENT"),
  canToggleAI: (role: UserRole) => hasRole(role, "AGENT"),
} as const;

export const ROLES = { OWNER: "OWNER", ADMIN: "ADMIN", AGENT: "AGENT", VIEWER: "VIEWER" } as const;
export type Role = keyof typeof ROLES;

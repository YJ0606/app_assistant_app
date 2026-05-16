export interface Tenant {
  id: string;
  name: string;
  slug: string;
  status: TenantStatus;
  logoUrl?: string;
  brandColor?: string;
  businessEmail?: string;
  businessPhone?: string;
  website?: string;
  address?: string;
  timezone: string;
  currency: string;
  businessHours?: BusinessHours;
  afterHoursMsg?: string;
  welcomeMessage?: string;
  createdAt: string;
  updatedAt: string;
}

export type TenantStatus = "ACTIVE" | "SUSPENDED" | "TRIAL" | "CANCELLED";

export interface BusinessHours {
  mon?: DayHours;
  tue?: DayHours;
  wed?: DayHours;
  thu?: DayHours;
  fri?: DayHours;
  sat?: DayHours;
  sun?: DayHours;
}

export interface DayHours {
  open: string;
  close: string;
  isOpen: boolean;
}

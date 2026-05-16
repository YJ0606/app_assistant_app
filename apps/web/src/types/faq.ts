export interface FAQ {
  id: string;
  tenantId: string;
  question: string;
  answer: string;
  keywords: string[];
  category?: string;
  isActive: boolean;
  priority: number;
  hitCount: number;
  createdAt: string;
  updatedAt: string;
}

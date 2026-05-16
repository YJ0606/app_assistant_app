export const PLANS = {
  starter: { id: "starter", name: "Starter", priceInPaise: 149900, messages: 500, seats: 2, catalogItems: 100 },
  growth:  { id: "growth",  name: "Growth",  priceInPaise: 399900, messages: 2500, seats: 5, catalogItems: 500 },
  pro:     { id: "pro",     name: "Pro",     priceInPaise: 999900, messages: 10000, seats: -1, catalogItems: -1 },
} as const;
export type PlanId = keyof typeof PLANS;

export declare const PLANS: {
    readonly starter: {
        readonly id: "starter";
        readonly name: "Starter";
        readonly priceInPaise: 149900;
        readonly messages: 500;
        readonly seats: 2;
        readonly catalogItems: 100;
    };
    readonly growth: {
        readonly id: "growth";
        readonly name: "Growth";
        readonly priceInPaise: 399900;
        readonly messages: 2500;
        readonly seats: 5;
        readonly catalogItems: 500;
    };
    readonly pro: {
        readonly id: "pro";
        readonly name: "Pro";
        readonly priceInPaise: 999900;
        readonly messages: 10000;
        readonly seats: -1;
        readonly catalogItems: -1;
    };
};
export type PlanId = keyof typeof PLANS;

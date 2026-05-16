export declare const hashPassword: (plain: string, rounds?: number) => Promise<string>;
export declare const comparePassword: (plain: string, hash: string) => Promise<boolean>;

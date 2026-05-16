import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    list(user: any): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        lastLoginAt: Date;
    }[]>;
    invite(user: any, body: {
        email: string;
        role: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        email: string;
        tenantId: string;
        role: import(".prisma/client").$Enums.UserRole;
        token: string;
        invitedById: string;
        acceptedAt: Date | null;
        expiresAt: Date;
    }>;
}

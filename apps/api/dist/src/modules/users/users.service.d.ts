import { PrismaService } from "../../database/prisma.service";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findByTenant(tenantId: string): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        lastLoginAt: Date;
    }[]>;
    invite(tenantId: string, email: string, role: string, invitedById: string): Promise<{
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
    updateRole(id: string, role: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        tenantId: string;
        passwordHash: string | null;
        firstName: string;
        lastName: string;
        role: import(".prisma/client").$Enums.UserRole;
        avatarUrl: string | null;
        phone: string | null;
        isActive: boolean;
        isEmailVerified: boolean;
        emailVerifyToken: string | null;
        passwordResetToken: string | null;
        passwordResetExpiry: Date | null;
        lastLoginAt: Date | null;
    }>;
}

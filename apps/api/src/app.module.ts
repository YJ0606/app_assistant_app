import { Module, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { ScheduleModule } from "@nestjs/schedule";
import { BullModule } from "@nestjs/bull";

import appConfig from "./config/app.config";
import authConfig from "./config/auth.config";
import dbConfig from "./config/db.config";
import billingConfig from "./config/billing.config";
import whatsappConfig from "./config/whatsapp.config";

import { PrismaModule } from "./database/prisma.module";
import { LoggerModule } from "./logger/logger.module";
import { TenantMiddleware } from "./common/middleware/tenant.middleware";
import { RequestIdMiddleware } from "./common/middleware/request-id.middleware";

import { AuthModule } from "./modules/auth/auth.module";
import { TenantsModule } from "./modules/tenants/tenants.module";
import { UsersModule } from "./modules/users/users.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { WhatsAppModule } from "./modules/whatsapp/whatsapp.module";
import { WebhooksModule } from "./modules/webhooks/webhooks.module";
import { ConversationsModule } from "./modules/conversations/conversations.module";
import { CustomersModule } from "./modules/customers/customers.module";
import { FAQModule } from "./modules/faq/faq.module";
import { CatalogModule } from "./modules/catalog/catalog.module";
import { BookingsModule } from "./modules/bookings/bookings.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { AutomationsModule } from "./modules/automations/automations.module";
import { TemplatesModule } from "./modules/templates/templates.module";
import { AnalyticsModule } from "./modules/analytics/analytics.module";
import { BillingModule } from "./modules/billing/billing.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { UploadsModule } from "./modules/uploads/uploads.module";
import { JobsModule } from "./jobs/jobs.module";

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authConfig, dbConfig, billingConfig, whatsappConfig],
    }),

    // Rate limiting
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),

    // Cron jobs
    ScheduleModule.forRoot(),

    // Queue
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST ?? "localhost",
        port: Number(process.env.REDIS_PORT ?? 6379),
      },
    }),

    // Core
    PrismaModule,
    LoggerModule,

    // Feature modules
    AuthModule,
    TenantsModule,
    UsersModule,
    DashboardModule,
    WhatsAppModule,
    WebhooksModule,
    ConversationsModule,
    CustomersModule,
    FAQModule,
    CatalogModule,
    BookingsModule,
    OrdersModule,
    AutomationsModule,
    TemplatesModule,
    AnalyticsModule,
    BillingModule,
    NotificationsModule,
    UploadsModule,
    JobsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestIdMiddleware).forRoutes("*");
    consumer.apply(TenantMiddleware).forRoutes("*");
  }
}

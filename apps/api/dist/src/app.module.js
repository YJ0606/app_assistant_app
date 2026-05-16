"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const schedule_1 = require("@nestjs/schedule");
const bull_1 = require("@nestjs/bull");
const app_config_1 = require("./config/app.config");
const auth_config_1 = require("./config/auth.config");
const db_config_1 = require("./config/db.config");
const billing_config_1 = require("./config/billing.config");
const whatsapp_config_1 = require("./config/whatsapp.config");
const prisma_module_1 = require("./database/prisma.module");
const logger_module_1 = require("./logger/logger.module");
const tenant_middleware_1 = require("./common/middleware/tenant.middleware");
const request_id_middleware_1 = require("./common/middleware/request-id.middleware");
const auth_module_1 = require("./modules/auth/auth.module");
const tenants_module_1 = require("./modules/tenants/tenants.module");
const users_module_1 = require("./modules/users/users.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
const whatsapp_module_1 = require("./modules/whatsapp/whatsapp.module");
const webhooks_module_1 = require("./modules/webhooks/webhooks.module");
const conversations_module_1 = require("./modules/conversations/conversations.module");
const customers_module_1 = require("./modules/customers/customers.module");
const faq_module_1 = require("./modules/faq/faq.module");
const catalog_module_1 = require("./modules/catalog/catalog.module");
const bookings_module_1 = require("./modules/bookings/bookings.module");
const orders_module_1 = require("./modules/orders/orders.module");
const automations_module_1 = require("./modules/automations/automations.module");
const templates_module_1 = require("./modules/templates/templates.module");
const analytics_module_1 = require("./modules/analytics/analytics.module");
const billing_module_1 = require("./modules/billing/billing.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const uploads_module_1 = require("./modules/uploads/uploads.module");
const jobs_module_1 = require("./jobs/jobs.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(request_id_middleware_1.RequestIdMiddleware).forRoutes("*");
        consumer.apply(tenant_middleware_1.TenantMiddleware).forRoutes("*");
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, auth_config_1.default, db_config_1.default, billing_config_1.default, whatsapp_config_1.default],
            }),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),
            schedule_1.ScheduleModule.forRoot(),
            bull_1.BullModule.forRoot({
                redis: {
                    host: process.env.REDIS_HOST ?? "localhost",
                    port: Number(process.env.REDIS_PORT ?? 6379),
                },
            }),
            prisma_module_1.PrismaModule,
            logger_module_1.LoggerModule,
            auth_module_1.AuthModule,
            tenants_module_1.TenantsModule,
            users_module_1.UsersModule,
            dashboard_module_1.DashboardModule,
            whatsapp_module_1.WhatsAppModule,
            webhooks_module_1.WebhooksModule,
            conversations_module_1.ConversationsModule,
            customers_module_1.CustomersModule,
            faq_module_1.FAQModule,
            catalog_module_1.CatalogModule,
            bookings_module_1.BookingsModule,
            orders_module_1.OrdersModule,
            automations_module_1.AutomationsModule,
            templates_module_1.TemplatesModule,
            analytics_module_1.AnalyticsModule,
            billing_module_1.BillingModule,
            notifications_module_1.NotificationsModule,
            uploads_module_1.UploadsModule,
            jobs_module_1.JobsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
const transform_interceptor_1 = require("./common/interceptors/transform.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ["error", "warn", "log", "debug"],
    });
    app.setGlobalPrefix("v1");
    app.enableCors({
        origin: process.env.WEB_URL ?? "http://localhost:3000",
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor(), new transform_interceptor_1.TransformInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("WaAI API")
        .setDescription("WhatsApp AI Assistant Platform API")
        .setVersion("1.0")
        .addBearerAuth()
        .addTag("Auth")
        .addTag("Tenants")
        .addTag("Dashboard")
        .addTag("WhatsApp")
        .addTag("Conversations")
        .addTag("FAQ")
        .addTag("Catalog")
        .addTag("Bookings")
        .addTag("Orders")
        .addTag("Automations")
        .addTag("Billing")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api/docs", app, document);
    const port = process.env.PORT ?? 4000;
    await app.listen(port);
    console.log(`🚀 WaAI API running at http://localhost:${port}/v1`);
    console.log(`📚 Swagger docs at http://localhost:${port}/api/docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map
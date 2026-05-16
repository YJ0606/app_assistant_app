import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor";
import { TransformInterceptor } from "./common/interceptors/transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["error", "warn", "log", "debug"],
  });

  // Global prefix
  app.setGlobalPrefix("v1");

  // CORS
  app.enableCors({
    origin: process.env.WEB_URL ?? "http://localhost:3000",
    credentials: true,
  });

  // Global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );

  // Global filters
  app.useGlobalFilters(new HttpExceptionFilter());

  // Global interceptors
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
    new TransformInterceptor()
  );

  // Swagger docs
  const config = new DocumentBuilder()
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

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  const port = process.env.PORT ?? 4000;
  await app.listen(port);

  console.log(`🚀 WaAI API running at http://localhost:${port}/v1`);
  console.log(`📚 Swagger docs at http://localhost:${port}/api/docs`);
}

bootstrap();

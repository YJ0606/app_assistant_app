import { registerAs } from "@nestjs/config";
export default registerAs("app", () => ({
  port: parseInt(process.env.PORT ?? "4000", 10),
  nodeEnv: process.env.NODE_ENV ?? "development",
  webUrl: process.env.WEB_URL ?? "http://localhost:3000",
  apiUrl: process.env.API_URL ?? "http://localhost:4000",
}));

import { registerAs } from "@nestjs/config";
export default registerAs("whatsapp", () => ({
  graphApiUrl: "https://graph.facebook.com/v20.0",
  appId: process.env.META_APP_ID,
  appSecret: process.env.META_APP_SECRET,
}));

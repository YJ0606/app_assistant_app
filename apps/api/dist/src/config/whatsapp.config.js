"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("whatsapp", () => ({
    graphApiUrl: "https://graph.facebook.com/v20.0",
    appId: process.env.META_APP_ID,
    appSecret: process.env.META_APP_SECRET,
}));
//# sourceMappingURL=whatsapp.config.js.map
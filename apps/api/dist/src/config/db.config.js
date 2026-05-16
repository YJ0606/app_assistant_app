"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("db", () => ({
    url: process.env.DATABASE_URL,
    redisHost: process.env.REDIS_HOST ?? "localhost",
    redisPort: parseInt(process.env.REDIS_PORT ?? "6379", 10),
}));
//# sourceMappingURL=db.config.js.map
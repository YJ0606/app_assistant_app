"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const crypto_1 = require("crypto");
const generateToken = (bytes = 32) => (0, crypto_1.randomBytes)(bytes).toString("hex");
exports.generateToken = generateToken;
//# sourceMappingURL=generate-token.js.map
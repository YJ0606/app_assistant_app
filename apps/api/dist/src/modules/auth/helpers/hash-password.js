"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcryptjs");
const hashPassword = (plain, rounds = 12) => bcrypt.hash(plain, rounds);
exports.hashPassword = hashPassword;
const comparePassword = (plain, hash) => bcrypt.compare(plain, hash);
exports.comparePassword = comparePassword;
//# sourceMappingURL=hash-password.js.map
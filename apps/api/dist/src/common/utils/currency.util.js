"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paise = paise;
exports.rupees = rupees;
exports.formatINR = formatINR;
function paise(rupees) { return Math.round(rupees * 100); }
function rupees(paise) { return paise / 100; }
function formatINR(amount) { return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0 }).format(amount); }
//# sourceMappingURL=currency.util.js.map
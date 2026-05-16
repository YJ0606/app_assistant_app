"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhone = normalizePhone;
exports.formatPhone = formatPhone;
function normalizePhone(phone) {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 10)
        return `91${digits}`;
    if (digits.startsWith("91") && digits.length === 12)
        return digits;
    return digits;
}
function formatPhone(phone) {
    const normalized = normalizePhone(phone);
    return `+${normalized.slice(0, 2)} ${normalized.slice(2, 7)} ${normalized.slice(7)}`;
}
//# sourceMappingURL=phone.util.js.map
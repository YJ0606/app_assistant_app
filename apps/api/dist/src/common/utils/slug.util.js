"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = generateSlug;
exports.uniqueSlug = uniqueSlug;
function generateSlug(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
}
function uniqueSlug(base, suffix) {
    const s = suffix ?? Math.random().toString(36).slice(2, 7);
    return `${generateSlug(base)}-${s}`;
}
//# sourceMappingURL=slug.util.js.map
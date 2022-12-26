"use strict";
/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = void 0;
// Popular generic algorithms
__exportStar(require("./algo/luhn"), exports);
__exportStar(require("./algo/verhoeff"), exports);
__exportStar(require("./algo/damm"), exports);
// ISO/IEC 7064:2003, Pure systems
__exportStar(require("./algo/mod11_2"), exports);
__exportStar(require("./algo/mod37_2"), exports);
__exportStar(require("./algo/mod97_10"), exports);
__exportStar(require("./algo/mod661_26"), exports);
__exportStar(require("./algo/mod1271_36"), exports);
// ISO/IEC 7064:2003, Hybrid systems
__exportStar(require("./algo/mod11_10"), exports);
__exportStar(require("./algo/mod27_26"), exports);
__exportStar(require("./algo/mod37_36"), exports);
// GTINs (including UPC, EAN, ISBN-13, etc.)
__exportStar(require("./algo/gtin"), exports);
/** Supported cdigit names */
exports.names = [
    "luhn",
    "verhoeff",
    "damm",
    "mod11_2",
    "mod37_2",
    "mod97_10",
    "mod661_26",
    "mod1271_36",
    "mod11_10",
    "mod27_26",
    "mod37_36",
    "gtin",
];

/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
// Popular generic algorithms
export * from "./algo/luhn.js";
export * from "./algo/verhoeff.js";
export * from "./algo/damm.js";
// ISO/IEC 7064:2003
export * from "./algo/iso7064.js";
// GTINs (including UPC, EAN, ISBN-13, etc.)
export * from "./algo/gtin.js";
/** Supported cdigit names */
export const names = [
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

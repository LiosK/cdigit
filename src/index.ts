/**
 * cdigit
 *
 * @copyright 2018-2020 LiosK
 * @license Apache-2.0
 */

// Popular generic algorithms
export * from "./algo/luhn";
export * from "./algo/verhoeff";
export * from "./algo/damm";

// ISO/IEC 7064:2003, Pure systems
export * from "./algo/mod11_2";
export * from "./algo/mod37_2";
export * from "./algo/mod97_10";
export * from "./algo/mod661_26";
export * from "./algo/mod1271_36";

// ISO/IEC 7064:2003, Hybrid systems
export * from "./algo/mod11_10";
export * from "./algo/mod27_26";
export * from "./algo/mod37_36";

// GTINs (including UPC, EAN, ISBN-13, etc.)
export * from "./algo/gtin";

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
  "gtin"
];

/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

export type { CdigitAlgo } from "./type";

// Popular generic algorithms
export * from "./algo/luhn";
export * from "./algo/verhoeff";
export * from "./algo/damm";

// ISO/IEC 7064:2003
export * from "./algo/iso7064";

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
  "gtin",
];

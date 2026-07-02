/**
 * cdigit
 *
 * @copyright 2018-2026 LiosK
 * @license (MIT OR Apache-2.0)
 */
export type { CdigitAlgo } from "./type.js";
export * from "./algo/luhn.js";
export * from "./algo/verhoeff.js";
export * from "./algo/damm.js";
export * from "./algo/iso7064.js";
export * from "./algo/gtin.js";
/** Supported cdigit names */
export declare const names: readonly ["luhn", "verhoeff", "damm", "mod11_2", "mod37_2", "mod97_10", "mod661_26", "mod1271_36", "mod11_10", "mod27_26", "mod37_36", "gtin"];

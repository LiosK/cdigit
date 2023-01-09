/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
export type { CdigitAlgo } from "./type.js";
export * from "./algo/luhn.js";
export * from "./algo/verhoeff.js";
export * from "./algo/damm.js";
export * from "./algo/iso7064.js";
export * from "./algo/gtin.js";
/** Supported cdigit names */
export declare const names: string[];

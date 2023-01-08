/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
export type { CdigitAlgo } from "./type";
export * from "./algo/luhn";
export * from "./algo/verhoeff";
export * from "./algo/damm";
export * from "./algo/iso7064";
export * from "./algo/gtin";
/** Supported cdigit names */
export declare const names: string[];

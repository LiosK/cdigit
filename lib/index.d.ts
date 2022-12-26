/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
export type { CdigitAlgo } from "./algo/common";
export * from "./algo/luhn";
export * from "./algo/verhoeff";
export * from "./algo/damm";
export * from "./algo/mod11_2";
export * from "./algo/mod37_2";
export * from "./algo/mod97_10";
export * from "./algo/mod661_26";
export * from "./algo/mod1271_36";
export * from "./algo/mod11_10";
export * from "./algo/mod27_26";
export * from "./algo/mod37_36";
export * from "./algo/gtin";
/** Supported cdigit names */
export declare const names: string[];

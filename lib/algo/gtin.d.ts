/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
import type { CdigitAlgo } from "../type.js";
/**
 * The standard check digit algorithm for GS1 data structures (including GTIN).
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
export declare const gtin: CdigitAlgo;

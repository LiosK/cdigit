/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { CdigitAlgo } from "./common";
/**
 * Verhoeff algorithm implementation
 *
 * Note: There is not a firm consensus on the direction (left to right or right
 * to left) in which a Verhoeff calculator scans numeric text to construct an
 * input digit sequence. This implementation is hard coded to read a string from
 * right to left and append the check digit at the rightmost position, which is
 * a consistent behavior with other popular implementations. Reverse the input
 * string before calling this class' methods if you need to interpret a string
 * from left to right.
 */
export declare const verhoeff: CdigitAlgo;

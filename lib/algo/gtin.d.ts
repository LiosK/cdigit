/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/**
 * Standard check digit algorithm for GS1 data structures (including GTIN)
 *
 * Note: This implementation does not check the length of a number; however, it
 * is not recommended to use numbers longer than 18 digits because GS1 General
 * Specifications do not explicitly specify an algorithm for them.
 */
declare class GTIN implements Algo {
    name: string;
    longName: string;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const gtin: GTIN;
export {};

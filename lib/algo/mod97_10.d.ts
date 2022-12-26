/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/** ISO/IEC 7064, MOD 97-10 implementation */
declare class Mod97_10 implements Algo {
    name: string;
    longName: string;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const mod97_10: Mod97_10;
export {};

/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/** ISO/IEC 7064, MOD 37-2 implementation */
declare class Mod37_2 implements Algo {
    name: string;
    longName: string;
    private alphabet;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const mod37_2: Mod37_2;
export {};

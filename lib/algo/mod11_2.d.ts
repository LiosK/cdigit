/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/** ISO/IEC 7064, MOD 11-2 implementation */
declare class Mod11_2 implements Algo {
    name: string;
    longName: string;
    private alphabet;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const mod11_2: Mod11_2;
export {};

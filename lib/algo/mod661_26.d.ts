/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/** ISO/IEC 7064, MOD 661-26 implementation */
declare class Mod661_26 implements Algo {
    name: string;
    longName: string;
    private alphabet;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const mod661_26: Mod661_26;
export {};

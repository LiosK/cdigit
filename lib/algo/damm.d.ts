/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */
import { Algo } from "./common";
/** Damm algorithm implementation */
declare class Damm implements Algo {
    name: string;
    longName: string;
    /** Damm operation table */
    private opTable;
    compute(num: string): string;
    generate(num: string): string;
    validate(num: string): boolean;
    parse(num: string): [string, string];
}
export declare const damm: Damm;
export {};

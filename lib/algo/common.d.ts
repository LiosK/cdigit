/**
 * cdigit
 *
 * @copyright 2018-2022 LiosK
 * @license (MIT OR Apache-2.0)
 */
/** Common interface for check digit algorithm implementations. */
export interface CdigitAlgo {
    /** cdigit name of the algorithm */
    readonly name: string;
    /** Human-readable name of the algorithm */
    readonly longName: string;
    /**
     * Generate a valid number string from a given string in accordance with the
     * algorithm. The generated string includes the original string and computed
     * check digit(s) that are combined in the manner specified by the algorithm.
     *
     * @return Number with check digit(s)
     */
    generate(numWithoutCC: string): string;
    /**
     * Check if a given string is valid according to the algorithm. The argument
     * must be a combined string of check digit(s) and their original number.
     *
     * @return True if valid
     */
    validate(numWithCC: string): boolean;
    /**
     * Generate check digit(s) from a given number. Unlike `generate()`, this
     * method returns the check digit(s) only.
     *
     * @return Check digit(s)
     */
    compute(numWithoutCC: string): string;
    /**
     * Split a number into its original number and check digit(s).
     *
     * @return Tuple of two strings [numWithoutCC, cc]
     */
    parse(numWithCC: string): [string, string];
}
export declare const helper: {
    parseTail: (num: string, n: number) => [string, string];
    _invCharListMemo: {
        [alphabet: string]: {
            [character: string]: number;
        };
    };
    invertCharList: (alphabet: string) => {
        [character: string]: number;
    };
    iso7064: {
        numeric: string;
        alphabetic: string;
        alphanumeric: string;
        /** Implement ISO 7064 pure system recursive method. */
        computePure: (num: string, mod: number, radix: number, hasTwoCCs: boolean, alphabet: string) => string;
        /** Implement ISO 7064 hybrid system recursive method. */
        computeHybrid: (ds: string, alphabet: string) => string;
    };
};

/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
/** Common interface for check digit algorithm implementations. */
export interface CdigitAlgo {
    /** `cdigit` name of the algorithm */
    readonly name: string;
    /** Human-readable name of the algorithm */
    readonly longName: string;
    /**
     * Generates the protected string from the argument using the algorithm. The
     * generated string consists of the original bare string and computed check
     * character(s), which are combined in accordance with the algorithm.
     *
     * @param strWithoutCheckChars - String without check character(s)
     * @returns String with check character(s)
     */
    generate(strWithoutCheckChars: string): string;
    /**
     * Checks if a protected string is valid per the algorithm.
     *
     * @param strWithCheckChars - String with check character(s)
     * @returns True if the argument is valid
     */
    validate(strWithCheckChars: string): boolean;
    /**
     * Generates the check character(s) from the argument using the algorithm.
     * Unlike `generate()`, this method returns the check character(s) only.
     *
     * @param strWithoutCheckChars - String without check character(s)
     * @returns Check character(s)
     */
    compute(strWithoutCheckChars: string): string;
    /**
     * Generates the check character(s) from the argument using the algorithm.
     * This method is an alphabet-independent equivalent of `compute()`, where the
     * return value and argument are both represented as arrays of each digit's
     * numerical value.
     *
     * @param numValsWithoutCheckChars - String without check character(s) decoded
     * to an array of numerical values
     * @returns Check character(s) decoded to an array of numerical values
     * @throws `SyntaxError` if the argument contains an invalid numerical value.
     */
    computeFromNumVals(numValsWithoutCheckChars: number[]): number[];
    /**
     * Splits a protected string into the pair of original bare string and check
     * character(s).
     *
     * @param strWithCheckChars - String with check character(s)
     * @returns Tuple of [string without check character(s), check character(s)]
     */
    parse(strWithCheckChars: string): [string, string];
}

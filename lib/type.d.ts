/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */
/** The common interface for check digit algorithm implementations. */
export interface CdigitAlgo {
    /** The `cdigit` name of the algorithm. */
    readonly name: string;
    /** A human-readable name of the algorithm. */
    readonly longName: string;
    /**
     * Generates the protected string from the argument using the algorithm. The
     * generated string consists of the original bare string and computed check
     * characters, which are combined in accordance with the algorithm.
     *
     * @param strWithoutCheckChars - A string without check characters.
     * @returns The string with check characters.
     * @throws `SyntaxError` if an algorithm-specific syntax error occurs. Note
     * that the bundled algorithm objects do not generally throw errors because
     * they ignore the unknown letters in the string to be protected.
     */
    generate(strWithoutCheckChars: string): string;
    /**
     * Checks if a protected string is valid per the algorithm.
     *
     * @param strWithCheckChars - A string with check characters.
     * @returns True if the argument is valid.
     * @throws `SyntaxError` if the argument does not contain check characters or
     * any other algorithm-specific syntax error occurs. Note that the bundled
     * algorithm objects do not generally throw errors because they ignore the
     * unknown letters in the string to be protected.
     */
    validate(strWithCheckChars: string): boolean;
    /**
     * Generates the check characters from the argument using the algorithm.
     * Unlike `generate()`, this method returns the check characters only.
     *
     * @param strWithoutCheckChars - A string without check characters.
     * @returns The check characters.
     * @throws `SyntaxError` if an algorithm-specific syntax error occurs. Note
     * that the bundled algorithm objects do not generally throw errors because
     * they ignore the unknown letters in the string to be protected.
     */
    compute(strWithoutCheckChars: string): string;
    /**
     * Generates the check characters from the argument using the algorithm. This
     * method is an alphabet-independent equivalent of `compute()`, where the
     * return value and argument are both represented as arrays of each digit's
     * numerical value.
     *
     * @param numValsWithoutCheckChars - A string without check characters decoded
     * to an array of numerical values.
     * @returns The check characters decoded to an array of numerical values.
     * @throws `SyntaxError` if the argument contains an invalid numerical value
     * or any other algorithm-specific syntax error occurs.
     */
    computeFromNumVals(numValsWithoutCheckChars: number[]): number[];
    /**
     * Splits a protected string into the pair of original bare string and check
     * characters.
     *
     * @param strWithCheckChars - A string with check characters.
     * @returns The tuple of [string without check characters, check characters].
     * @throws `SyntaxError` if the argument does not contain check characters or
     * any other algorithm-specific syntax error occurs. Note that the bundled
     * algorithm objects do not generally throw errors because they ignore the
     * unknown letters in the string to be protected.
     */
    parse(strWithCheckChars: string): [string, string];
}

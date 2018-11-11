export interface CdigitAlgo {
  /*** Generate a check digit for a number. */
  generate(num: string): string;

  /*** Return a combined string of a number and its check digit. */
  encode(num: string): string;

  /*** Split a code into a pair of number and check digit. */
  decode(code: string): [string, string];

  /*** Return true if a code or a pair of number and check digit is valid. */
  validate(codeOrNum: string, checkdigit?: string): boolean;
}

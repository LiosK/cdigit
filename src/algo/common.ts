export interface Algo {
  /***
   * Generate a valid number string from a given source number. The generated
   * number includes the check digit(s) computed and placed in accordance with
   * the algorithm.
   */
  generate(num: string): string;

  /***
   * Check if a given string is valid in accordance with the algorithm. The
   * argument must include check digit(s) as well as the source number.
   */
  validate(num: string): boolean;

  /*** Generate check digit(s) from a given source number. */
  compute(num: string): string;

  /*** Split a number into its source number and check digits. */
  parse(num: string): [string, string];
}

export const helper = {
  parseTail: (num: string, n: number): [string, string] => {
    num = String(num);
    return [num.slice(0, -n), num.slice(-n)];
  },
};

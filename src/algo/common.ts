/**
 * cdigit
 *
 * @copyright 2018 LiosK
 * @license Apache-2.0
 */

/** Common interface for check digit algorithm implementations. */
export interface Algo {
  /**
   * Generate a valid number string from a given source number. The generated
   * string includes the check digit(s) computed and placed in accordance with
   * the algorithm.
   */
  generate(num: string): string;

  /**
   * Check if a given string is valid in accordance with the algorithm. The
   * argument must include check digit(s) as well as the source number.
   */
  validate(num: string): boolean;

  /**
   * Generate check digit(s) from a given source number. This returns the check
   * digit(s) only.
   */
  compute(num: string): string;

  /** Split a number into its source number and check digits. */
  parse(num: string): [string, string];
}

type CharMap = { input: {[key: string]: number}, output: string };

export const helper = {
  parseTail: (num: string, n: number): [string, string] => {
    const ds = String(num);
    return [ds.slice(0, -n), ds.slice(-n)];
  },
  iso7064: {
    numeric: '0123456789X',
    alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphanumeric: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*',
    compileCharMap: (alphabet: string): CharMap => {
      const inv: {[key: string]: number} = {};
      for (let i = 0, len = alphabet.length; i < len; i += 1) {
        inv[alphabet[i]] = i;
      }
      return { input: inv, output: alphabet };
    },
    /** Implement ISO 7064 pure system recursive method. */
    computePure: (
      num: string, mod: number, radix: number,
      hasTwoCCs: boolean, { output, input }: CharMap,
    ) => {
      const ds = `${num}${output[0].repeat(hasTwoCCs ? 2 : 1)}`;
      const overflowProtection = Math.floor(0xffffffffffff / radix);

      let c = 0;
      for (let i = 0, len = ds.length; i < len; i += 1) {
        c = (c * radix) + input[ds[i]];
        if (c > overflowProtection) {
          c %= mod;
        }
      }
      c = (mod + 1 - c % mod) % mod;

      if (hasTwoCCs) {
        return `${output[Math.floor(c / radix)]}${output[c % radix]}`;
      }
      return output[c];
    },
    /** Implement ISO 7064 hybrid system recursive method. */
    computeHybrid: (ds: string, { output, input }: CharMap) => {
      const mod = output.length;

      let c = mod;
      for (let i = 0, len = ds.length; i < len; i += 1) {
        c = (c % (mod + 1)) + input[ds[i]];
        c = (c % mod || mod) * 2;
      }
      c %= mod + 1;

      return output[(mod + 1 - c) % mod];
    },
  },
};

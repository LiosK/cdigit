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

export const helper = {
  parseTail: (num: string, n: number): [string, string] => {
    const ds = String(num);
    return [ds.slice(0, -n), ds.slice(-n)];
  },
  _invCharListMemo: {} as {[alphabet: string]: {[character: string]: number}},
  invertCharList: (alphabet: string): {[character: string]: number} => {
    if (helper._invCharListMemo[alphabet] == null) {
      helper._invCharListMemo[alphabet] = {};
      for (let i = 0, len = alphabet.length; i < len; i += 1) {
        helper._invCharListMemo[alphabet][alphabet[i]] = i;
      }
    }
    return helper._invCharListMemo[alphabet];
  },
  iso7064: {
    numeric: '0123456789X',
    alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphanumeric: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*',
    /** Implement ISO 7064 pure system recursive method. */
    computePure: (
      num: string, mod: number, radix: number, hasTwoCCs: boolean, alphabet: string,
    ) => {
      const ds = `${num}${alphabet[0].repeat(hasTwoCCs ? 2 : 1)}`;
      const overflowProtection = Math.floor(0xffffffffffff / radix);
      const charmap = helper.invertCharList(alphabet);

      let c = 0;
      for (let i = 0, len = ds.length; i < len; i += 1) {
        c = (c * radix) + charmap[ds[i]];
        if (c > overflowProtection) {
          c %= mod;
        }
      }
      c = (mod + 1 - c % mod) % mod;

      if (hasTwoCCs) {
        return `${alphabet[Math.floor(c / radix)]}${alphabet[c % radix]}`;
      }
      return alphabet[c];
    },
    /** Implement ISO 7064 hybrid system recursive method. */
    computeHybrid: (ds: string, alphabet: string) => {
      const mod = alphabet.length;
      const charmap = helper.invertCharList(alphabet);

      let c = mod;
      for (let i = 0, len = ds.length; i < len; i += 1) {
        c = (c % (mod + 1)) + charmap[ds[i]];
        c = (c % mod || mod) * 2;
      }
      c %= mod + 1;

      return alphabet[(mod + 1 - c) % mod];
    },
  },
};

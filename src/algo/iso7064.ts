/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

const invertCharListMemo: {
  [alphabet: string]: { [character: string]: number };
} = {};

const invertCharList = (alphabet: string): { [character: string]: number } => {
  if (invertCharListMemo[alphabet] == null) {
    invertCharListMemo[alphabet] = {};
    const len = alphabet.length;
    for (let i = 0; i < len; i += 1) {
      invertCharListMemo[alphabet][alphabet[i]] = i;
    }
    if (len !== Object.keys(invertCharListMemo[alphabet]).length) {
      throw new Error("assertion error: chars must be unique");
    }
  }
  return invertCharListMemo[alphabet];
};

/** Implement ISO 7064 pure system recursive method. */
export const computePure = (
  num: string,
  mod: number,
  radix: number,
  hasTwoCCs: boolean,
  alphabet: string
): string => {
  const ds = `${num}${alphabet[0]}${hasTwoCCs ? alphabet[0] : ""}`;
  const overflowProtection = Math.floor(0xffffffffffff / radix);
  const charmap = invertCharList(alphabet);

  let c = 0;
  for (let i = 0, len = ds.length; i < len; i += 1) {
    c = c * radix + charmap[ds[i]];
    if (c > overflowProtection) {
      c %= mod;
    }
  }
  c = (mod + 1 - (c % mod)) % mod;

  if (hasTwoCCs) {
    return `${alphabet[Math.floor(c / radix)]}${alphabet[c % radix]}`;
  }
  return alphabet[c];
};

/** Implement ISO 7064 hybrid system recursive method. */
export const computeHybrid = (ds: string, alphabet: string): string => {
  const mod = alphabet.length;
  const charmap = invertCharList(alphabet);

  let c = mod;
  for (let i = 0, len = ds.length; i < len; i += 1) {
    c = (c % (mod + 1)) + charmap[ds[i]];
    c = (c % mod || mod) * 2;
  }
  c %= mod + 1;

  return alphabet[(mod + 1 - c) % mod];
};

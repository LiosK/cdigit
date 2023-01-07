/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

const charMapMemo: {
  [alphabet: string]: { [character: string]: number };
} = {};

const getCharMap = (alphabet: string): { [character: string]: number } => {
  if (charMapMemo[alphabet] == null) {
    charMapMemo[alphabet] = {};
    for (let i = 0; i < alphabet.length; i += 1) {
      const c = alphabet[i];
      if (charMapMemo[alphabet][c] == null) {
        charMapMemo[alphabet][c] = i;
      } else {
        throw new Error("assertion error: chars must be unique");
      }
    }
  }
  return charMapMemo[alphabet];
};

/** Converts a string into the numerical value array. */
export const decodeString = (s: string, alphabet: string): number[] => {
  const charMap = getCharMap(alphabet);
  return [...s].map((e) => charMap[e]);
};

/** Implement ISO 7064 pure system recursive method. */
export const computePure = (
  ns: number[],
  mod: number,
  radix: number,
  hasTwoCCs: boolean
): number[] => {
  const overflowProtection = Math.floor(0xffffffffffff / radix);

  let c = 0;
  for (const e of hasTwoCCs ? [...ns, 0, 0] : [...ns, 0]) {
    c = c * radix + e;
    if (c > overflowProtection) {
      c %= mod;
    }
  }
  c = (mod + 1 - (c % mod)) % mod;

  if (hasTwoCCs) {
    return [Math.floor(c / radix), c % radix];
  }
  return [c];
};

/** Implement ISO 7064 hybrid system recursive method. */
export const computeHybrid = (ns: number[], mod: number): number[] => {
  let c = mod;
  for (const e of ns) {
    c = (c % (mod + 1)) + e;
    c = (c % mod || mod) * 2;
  }
  c %= mod + 1;

  return [(mod + 1 - c) % mod];
};

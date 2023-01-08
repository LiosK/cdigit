/**
 * cdigit
 *
 * @copyright 2018-2023 LiosK
 * @license (MIT OR Apache-2.0)
 */

import type { CdigitAlgo } from "../type";

class Verhoeff implements CdigitAlgo {
  constructor(readonly name: string, readonly longName: string) {}

  /** Verhoeff multiplication table */
  private readonly d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ];

  /** Verhoeff permutation table */
  private readonly p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
  ];

  /** Verhoeff inverse table */
  private readonly inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

  computeFromNumVals(ns: number[]): number[] {
    if (ns.some((e) => e < 0 || e > 9 || !Number.isInteger(e))) {
      throw new SyntaxError("invalid numerical value detected");
    }

    // as if: `ns.push(0); let c = 0;` and finished first loop where i == 0
    let c = this.d[0][this.p[0][0]];
    for (let i = 1, len = ns.length; i <= len; i += 1) {
      c = this.d[c][this.p[i & 7][ns[len - i]]];
    }
    return [this.inv[c]];
  }

  compute(s: string): string {
    const ds = String(s).replace(/[^0-9]/g, "");
    const ns = [...ds].map(Number);
    return String(this.computeFromNumVals(ns)[0]);
  }

  parse(s: string): [string, string] {
    const ds = String(s);
    return [ds.slice(0, -1), ds.slice(-1)];
  }

  generate(s: string): string {
    return `${s}${this.compute(s)}`;
  }

  validate(s: string): boolean {
    const [bare, cc] = this.parse(s);
    return this.compute(bare) === cc;
  }
}

/**
 * Verhoeff algorithm implementation
 *
 * Note: There is not a firm consensus on the direction (left to right or right
 * to left) in which a Verhoeff calculator scans numeric text to construct an
 * input digit sequence. This implementation is hard coded to read a string from
 * right to left and append the check digit at the rightmost position, which is
 * a consistent behavior with other popular implementations. Reverse the input
 * string before calling this class' methods if you need to interpret a string
 * from left to right.
 */
export const verhoeff: CdigitAlgo = new Verhoeff(
  "verhoeff",
  "Verhoeff Algorithm"
);

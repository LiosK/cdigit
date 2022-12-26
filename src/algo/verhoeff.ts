/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { CdigitAlgo, helper } from "./common";

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
class Verhoeff implements CdigitAlgo {
  name = "verhoeff";
  longName = "Verhoeff Algorithm";

  /** Verhoeff multiplication table */
  private d = [
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
  private p = [
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
  private inv = ["0", "4", "3", "2", "1", "5", "6", "7", "8", "9"];

  compute(num: string): string {
    const ds = `${String(num).replace(/[^0-9]/g, "")}0`;

    let c = 0;
    for (let i = 0, len = ds.length; i < len; i += 1) {
      c = this.d[c][this.p[i & 7][Number(ds[len - i - 1])]];
    }

    return this.inv[c];
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return helper.parseTail(num, 1);
  }
}

export const verhoeff = new Verhoeff();

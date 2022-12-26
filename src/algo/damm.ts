/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { Algo, helper } from "./common.js";

/** Damm algorithm implementation */
class Damm implements Algo {
  name = "damm";
  longName = "Damm Algorithm";

  /** Damm operation table */
  private opTable = [
    [0, 3, 1, 7, 5, 9, 8, 6, 4, 2],
    [7, 0, 9, 2, 1, 5, 4, 8, 6, 3],
    [4, 2, 0, 6, 8, 7, 1, 3, 5, 9],
    [1, 7, 5, 0, 9, 8, 3, 4, 2, 6],
    [6, 1, 2, 3, 0, 4, 5, 9, 7, 8],
    [3, 6, 7, 4, 2, 0, 9, 5, 8, 1],
    [5, 8, 6, 9, 7, 2, 0, 1, 3, 4],
    [8, 9, 4, 5, 3, 6, 2, 0, 1, 7],
    [9, 4, 3, 8, 6, 1, 7, 2, 0, 5],
    [2, 5, 8, 1, 4, 3, 6, 7, 9, 0],
  ];

  compute(num: string): string {
    const ds = `${String(num).replace(/[^0-9]/g, "")}`;

    let c = 0;
    for (let i = 0, len = ds.length; i < len; i += 1) {
      c = this.opTable[c][Number(ds[i])];
    }

    return String(c);
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

export const damm = new Damm();

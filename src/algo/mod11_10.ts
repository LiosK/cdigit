/**
 * cdigit
 *
 * @copyright 2018-2020 LiosK
 * @license Apache-2.0
 */

import { Algo, helper } from "./common";

/** ISO/IEC 7064, MOD 11-10 implementation */
class Mod11_10 implements Algo {
  name = "mod11_10";
  longName = "ISO/IEC 7064, MOD 11-10";

  private alphabet: string = helper.iso7064.numeric.slice(0, -1);

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9]/g, "");
    return helper.iso7064.computeHybrid(ds, this.alphabet);
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

export const mod11_10 = new Mod11_10();

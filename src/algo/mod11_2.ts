/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { Algo, helper } from "./common.js";

class Mod11_2 implements Algo {
  name = "mod11_2";
  longName = "ISO/IEC 7064, MOD 11-2";

  private alphabet: string = helper.iso7064.numeric;

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9]/g, "");
    return helper.iso7064.computePure(ds, 11, 2, false, this.alphabet);
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

/** ISO/IEC 7064, MOD 11-2 implementation */
export const mod11_2: Algo = new Mod11_2();

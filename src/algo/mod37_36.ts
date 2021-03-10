/**
 * cdigit
 *
 * @copyright 2018-2021 LiosK
 * @license (MIT OR Apache-2.0)
 */

import { Algo, helper } from "./common";

/** ISO/IEC 7064, MOD 37-36 implementation */
class Mod37_36 implements Algo {
  name = "mod37_36";
  longName = "ISO/IEC 7064, MOD 37-36";

  private alphabet: string = helper.iso7064.alphanumeric.slice(0, -1);

  compute(num: string): string {
    const ds = String(num).replace(/[^0-9A-Z]/g, "");
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

export const mod37_36 = new Mod37_36();

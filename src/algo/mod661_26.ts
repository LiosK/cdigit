import { Algo, helper } from './common';

const charmap = helper.iso7064.compileCharMap(helper.iso7064.alphabetic);

export default new class Mod661_26 implements Algo {
  compute(num: string): string {
    const ds = String(num).replace(/[^A-Z]/g, '');
    return helper.iso7064.computePure(ds, 661, 26, true, charmap);
  }

  generate(num: string): string {
    return `${num}${this.compute(num)}`;
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return helper.parseTail(num, 2);
  }
};

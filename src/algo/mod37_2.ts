import { Algo, helper } from './common';

const charmap = helper.iso7064.compileCharMap(helper.iso7064.alphanumeric);

export default new class Mod37_2 implements Algo {
  compute(num: string): string {
    const ds = String(num).replace(/[^0-9A-Z]/g, '');
    return helper.iso7064.computePure(ds, 37, 2, false, charmap);
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
};

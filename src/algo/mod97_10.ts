import { Algo, helper } from './common';

export default new class Mod97_10 implements Algo {
  compute(num: string): string {
    const ds = `${String(num).replace(/[^0-9]/g, '')}00`;

    let c = Number(ds.slice(0, 14)) % 97; // 10^14 < 2^48
    for (let i = 14, len = ds.length; i < len; i += 12) {
      c = Number(String(c) + ds.slice(i, i + 12)) % 97;
    }

    return `0${98 - c}`.slice(-2);
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

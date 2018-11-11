import { CdigitAlgo } from './common';

const alphabet = ((ds) => {
  const map: {[key: string]: string} = {};
  for (let i = 0; i < ds.length; ++i) {
    map[ds[i]] = String(i);
  }
  return map;
})('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');

export default new class Mod97_10 implements CdigitAlgo {
  generate(num: string): string {
    num = String(num) + '00';

    let base10 = '';
    for (const c of num) {
      base10 += alphabet[c];
    }

    let c = Number(base10.slice(0, 9)) % 97;
    for (let i = 9, len = base10.length; i < len; i += 7) {
      c = Number(String(c) + base10.slice(i, i + 7)) % 97;
    }

    return ('0' + String(98 - c)).slice(-2);
  }

  encode(num: string): string {
    num = String(num);
    return num + this.generate(num);
  }

  decode(code: string): [string, string] {
    code = String(code);
    return [code.slice(0, -2), code.slice(-2)];
  }

  validate(codeOrNum: string, checkdigit: string = ''): boolean {
    let num = String(codeOrNum);
    if (checkdigit === '') {
      [num, checkdigit] = this.decode(num);
    }
    return this.generate(num) === String(checkdigit);
  }
}

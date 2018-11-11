import { CdigitAlgo } from './common';

const LUHN_ODD_LOOKUP = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

export default new class Luhn implements CdigitAlgo {
  generate(num: string): string {
    num = String(num);

    let sum = 0;
    for (let i = num.length - 1; i > -1; i -= 2) { // "odd" digits
      sum += LUHN_ODD_LOOKUP[Number(num[i])];
    }
    for (let i = num.length - 2; i > -1; i -= 2) { // "even" digits
      sum += Number(num[i]);
    }

    return String(10 - sum % 10).slice(-1);
  }

  encode(num: string): string {
    num = String(num);
    return num + this.generate(num);
  }

  decode(code: string): [string, string] {
    code = String(code);
    return [code.slice(0, -1), code.slice(-1)];
  }

  validate(codeOrNum: string, checkdigit: string = ''): boolean {
    let num = String(codeOrNum);
    if (checkdigit === '') {
      [num, checkdigit] = this.decode(num);
    }
    return this.generate(num) === String(checkdigit);
  }
}

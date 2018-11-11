import { CdigitAlgo } from './common';

/*** Verhoeff multiplication table */
const d = [
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

/*** Verhoeff permutation table */
const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

/*** Verhoeff inverse table */
const inv = ['0', '4', '3', '2', '1', '5', '6', '7', '8', '9'];

export default new class Verhoeff implements CdigitAlgo {
  generate(num: string): string {
    num = String(num) + '0';

    let c = 0;
    for (let i = 0, len = num.length; i < len; ++i) {
      c = d[c][p[i & 7][Number(num[len - i - 1])]];
    }

    return inv[c];
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

export default abstract class CdigitAlgo {
  /*** Generate a check digit for a number. */
  abstract generate(num: string): string;

  /*** Return a combined string of a number and its check digit. */
  encode(num: string): string {
    num = String(num);
    return num + this.generate(num);
  }

  /*** Split a code into a pair of number and check digit. */
  decode(code: string): [string, string] {
    code = String(code);
    return [code.slice(0, -1), code.slice(-1)];
  }

  /*** Return true if a code or a pair of number and check digit is valid. */
  validate(codeOrNum: string, checkdigit: string = ''): boolean {
    let num = String(codeOrNum);
    if (checkdigit === '') {
      [num, checkdigit] = this.decode(num);
    }
    return this.generate(num) === String(checkdigit);
  }
}

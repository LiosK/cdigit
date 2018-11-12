import { Algo } from './common';

export default class AlgoWrapper implements Algo {
  algo: Algo;

  constructor(algo: Algo) {
    this.algo = algo;
  }

  compute(num: string): string {
    return this.algo.compute(num);
  }

  generate(num: string): string {
    return String(num) + this.compute(num);
  }

  validate(num: string): boolean {
    const [src, cc] = this.parse(num);
    return this.compute(src) === cc;
  }

  parse(num: string): [string, string] {
    return this.algo.parse(num);
  }
}

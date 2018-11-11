const assert = require('assert').strict;
const cdigit = require('..');

describe('ISO/IEC 7064, MOD 97-10 algorithm', () => {
  const name = 'mod97_10';
  const algo = cdigit[name];

  const valid = [
    ['794', '44'],
  ];

  const invalid = [
    ['794', '45'],
  ];

  const large = [
    ['32142829123456987654321611', '82'],
    ['06 000 01234567', '58'],
    ['06 000 01234586', '98'],
  ];

  describe(name + '.compute()', () => {
    it('generates a correct check digit', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.compute(num), checkdigit, `${name}.compute(${num})`);
      }
    });

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.equal(algo.compute(num), checkdigit, `${name}.compute(${num})`);
      }
    });

    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.equal(algo.compute(num), checkdigit, `${name}.compute(${num})`);
      }
    });
  });

  describe(name + '.validate()', () => {
    it('returns true if a number is valid', () => {
      for (const [num, checkdigit] of valid) {
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
      }
    });
    it('returns false if a number is invalid', () => {
      for (const [num, checkdigit] of invalid) {
        assert.ok(!algo.validate(num + checkdigit), `!${name}.validate(${num + checkdigit})`);
      }
    });

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
      }
    });

    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
      }
    });
  });

  describe(name + '.generate()', () => {
    it('appends a correct check digit to a number', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.generate(num), num + checkdigit, `${name}.generate(${num})`);
      }
    });

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.equal(algo.generate(num), num + checkdigit, `${name}.generate(${num})`);
      }
    });

    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.equal(algo.generate(num), num + checkdigit, `${name}.generate(${num})`);
      }
    });
  });

  describe(name + '.parse()', () => {
    it('separates the leading digits and the last digit', () => {
      for (const [num, checkdigit] of valid) {
        assert.deepEqual(algo.parse(num + checkdigit), [num, checkdigit], `${name}.parse(${num + checkdigit})`);
      }
    });
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.deepEqual(algo.parse(num + checkdigit), [num, checkdigit], `${name}.parse(${num + checkdigit})`);
      }
    });
  });

  describe('bulk example test', () => {
    const examples = [
      '79444',
    ];

    it('applies the four functions to collected valid examples', () => {
      for (const e of examples) {
        const [num, checkdigit] = algo.parse(e);
        assert.equal(algo.compute(num), checkdigit, `${name}.compute(${num})`);
        assert.ok(algo.validate(e), `${name}.validate(${e})`);
        assert.equal(algo.generate(num), e, `${name}.generate(${num})`);
      }
    });
  });

});

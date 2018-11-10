const assert = require('assert').strict;
const cdigit = require('..');

describe('Verhoeff algorithm', () => {
  const name = 'verhoeff';
  const algo = cdigit[name];

  const valid = [
    ['236', '3'],
  ];

  const invalid = [
    ['236', '0'], ['236', '1'], ['236', '2'],
    ['236', '4'], ['236', '5'], ['236', '6'],
    ['236', '7'], ['236', '8'], ['236', '9'],
  ];

  const large = [
    ['236', '3'],
  ];

  describe(name + '.generate()', () => {
    it('generates a correct check digit', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
      }
    });

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.generate(Number(num)), checkdigit, `${name}.generate(${num})`);
      }
    });
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
      }
    });
  });

  describe(name + '.validate()', () => {
    it('returns true if a code or a pair of number and check digit is valid', () => {
      for (const [num, checkdigit] of valid) {
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
        assert.ok(algo.validate(num, checkdigit), `${name}.validate(${num}, ${checkdigit})`);
      }
    });
    it('returns false if a code or a pair of number and check digit is invalid', () => {
      for (const [num, checkdigit] of invalid) {
        assert.ok(!algo.validate(num + checkdigit), `!${name}.validate(${num + checkdigit})`);
        assert.ok(!algo.validate(num, checkdigit), `!${name}.validate(${num}, ${checkdigit})`);
      }
    });

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.ok(algo.validate(Number(num + checkdigit)), `${name}.validate(${num + checkdigit})`);
        assert.ok(algo.validate(Number(num), checkdigit), `${name}.validate(${num}, ${checkdigit})`);
      }
    });
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
        assert.ok(algo.validate(num, checkdigit), `${name}.validate(${num}, ${checkdigit})`);
      }
    });
  });

  describe(name + '.encode()', () => {
    it('appends a correct check digit to a number', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.encode(num), num + checkdigit, `${name}.encode(${num})`);
      }
    });

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.encode(Number(num)), num + checkdigit, `${name}.encode(${num})`);
      }
    });
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.equal(algo.encode(num), num + checkdigit, `${name}.encode(${num})`);
      }
    });
  });

  describe(name + '.decode()', () => {
    it('separates the leading digits and the last digit', () => {
      for (const [num, checkdigit] of valid) {
        assert.deepEqual(algo.decode(num + checkdigit), [num, checkdigit], `${name}.decode(${num + checkdigit})`);
      }
    });
    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.deepEqual(algo.decode(Number(num + checkdigit)), [num, checkdigit], `${name}.decode(${num + checkdigit})`);
      }
    });
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.deepEqual(algo.decode(num + checkdigit), [num, checkdigit], `${name}.decode(${num + checkdigit})`);
      }
    });
  });

  describe('bulk example test', () => {
    const examples = [
      '2363',
    ];

    it('applies the four functions to collected valid examples', () => {
      for (const e of examples) {
        const [num, checkdigit] = [e.slice(0, -1), e.slice(-1)];
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
        assert.ok(algo.validate(e), `${name}.validate(${e})`);
        assert.ok(algo.validate(num, checkdigit), `${name}.validate(${num}, ${checkdigit})`);
        assert.equal(algo.encode(num), e, `${name}.encode(${num})`);
        assert.deepEqual(algo.decode(e), [num, checkdigit], `${name}.decode(${e})`);
      }
    });
  });

});

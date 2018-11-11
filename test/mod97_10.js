const assert = require('assert').strict;
const cdigit = require('..');

describe('ISO/IEC 7064, MOD 97-10 algorithm', () => {
  const name = 'mod97_10';
  const algo = cdigit[name];

  const valid = [
    ['096123456769BE', '71'],
    ['30006000011234567890189FR', '76'],
    ['100000000123456789DE', '91'],
    ['08100010000001234567890GR', '96'],
    ['BCYP0000001234567890RO', '09'],
    ['20000001234567891234SA', '44'],
    ['21000813610123456789ES', '79'],
    ['04835012345678009CH', '56'],
    ['MIDL07009312345678GB', '98'],
  ];

  const invalid = [
    ['096123456769BE', '46'],
    ['30006000011234567890189FR', '56'],
    ['100000000123456789DE', '81'],
    ['08100010000001234567890GR', '73'],
    ['BCYP0000001234567890RO', '21'],
    ['20000001234567891234SA', '70'],
    ['21000813610123456789ES', '45'],
    ['04835012345678009CH', '77'],
    ['MIDL07009312345678GB', '12'],
  ];

  const large = [
    ['096123456769BE', '71'],
    ['30006000011234567890189FR', '76'],
    ['100000000123456789DE', '91'],
    ['08100010000001234567890GR', '96'],
    ['BCYP0000001234567890RO', '09'],
    ['20000001234567891234SA', '44'],
    ['21000813610123456789ES', '79'],
    ['04835012345678009CH', '56'],
    ['MIDL07009312345678GB', '98'],
  ];

  describe(name + '.generate()', () => {
    it('generates a correct check digit', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
      }
    });

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
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

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.ok(algo.validate(num + checkdigit), `${name}.validate(${num + checkdigit})`);
        assert.ok(algo.validate(num, checkdigit), `${name}.validate(${num}, ${checkdigit})`);
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

    it('is not affected by leading zeros', () => {
      for (let [num, checkdigit] of valid) {
        num = '0000' + num;
        assert.equal(algo.encode(num), num + checkdigit, `${name}.encode(${num})`);
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
    it('accepts large decimal strings', () => {
      for (const [num, checkdigit] of large) {
        assert.deepEqual(algo.decode(num + checkdigit), [num, checkdigit], `${name}.decode(${num + checkdigit})`);
      }
    });
  });

  describe('bulk example test', () => {
    const examples = [
      '096123456769BE71',
      '30006000011234567890189FR76',
      '100000000123456789DE91',
      '08100010000001234567890GR96',
      'BCYP0000001234567890RO09',
      '20000001234567891234SA44',
      '21000813610123456789ES79',
      '04835012345678009CH56',
      'MIDL07009312345678GB98',
    ];

    it('applies the four functions to collected valid examples', () => {
      for (const e of examples) {
        const [num, checkdigit] = algo.decode(e);
        assert.equal(algo.generate(num), checkdigit, `${name}.generate(${num})`);
        assert.ok(algo.validate(e), `${name}.validate(${e})`);
        assert.ok(algo.validate(num, checkdigit), `${name}.validate(${num}, ${checkdigit})`);
        assert.equal(algo.encode(num), e, `${name}.encode(${num})`);
      }
    });
  });

});

const assert = require('assert').strict;
const cdigit = require('..');

describe('Luhn algorithm', () => {
  const name = 'luhn';
  const algo = cdigit[name];

  const valid = [
    ['639283842', '8'], ['612168805', '2'],
    ['924800170', '4'], ['427176307', '2'],
    ['916912504', '5'], ['385833974', '4'],
    ['603976130', '6'], ['788414730', '2'],
  ];

  const invalid = [
    ['639283842', '1'], ['612168805', '9'],
    ['924800170', '7'], ['427176307', '5'],
    ['916912504', '2'], ['385833974', '5'],
    ['603976130', '4'], ['788414730', '1'],
  ];

  const large = [
    ['337689354611811278911584191118941269108603765', '0'],
    ['425818470785860807265159197745905287403180971', '5'],
    ['564102520726223698305625859271932637683426856', '5'],
    ['578979745902582135441775638253369716621004051', '2'],
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

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.compute(Number(num)), checkdigit, `${name}.compute(${num})`);
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

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.ok(algo.validate(Number(num + checkdigit)), `${name}.validate(${num + checkdigit})`);
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

    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.equal(algo.generate(Number(num)), num + checkdigit, `${name}.generate(${num})`);
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
    it('accepts Number type as argument', () => {
      for (const [num, checkdigit] of valid) {
        assert.deepEqual(algo.parse(Number(num + checkdigit)), [num, checkdigit], `${name}.parse(${num + checkdigit})`);
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
      '79927398713',
      '49927398716',
      '1234567812345670',
      '4024007199952671',
      '4968009448991185',
      '4485031936696447520',
      '2720991026808100',
      '5313977435287891',
      '5144122279996944',
      '345624181492183',
      '379723913300158',
      '345999017580637',
      '6011232699595685',
      '6011491169622003',
      '6011285697355763491',
      '3542720990091367',
      '3532233574622997',
      '3532788220114354666',
      '5403399339551671',
      '5585760385211280',
      '5481899719102875',
      '30540557891578',
      '30071210433038',
      '30126773590440',
      '36300226927160',
      '36462605784370',
      '36705219593581',
      '6763637858365987',
      '6762136018635356',
      '6762285720444928',
      '4175003833113538',
      '4917845148786751',
      '4508189071154330',
      '6397642356831336',
      '6379177784930725',
      '6371983222326360',
    ];

    it('applies the four functions to collected valid examples', () => {
      for (const e of examples) {
        const [num, checkdigit] = [e.slice(0, -1), e.slice(-1)];
        assert.equal(algo.compute(num), checkdigit, `${name}.compute(${num})`);
        assert.ok(algo.validate(e), `${name}.validate(${e})`);
        assert.equal(algo.generate(num), e, `${name}.generate(${num})`);
        assert.deepEqual(algo.parse(e), [num, checkdigit], `${name}.parse(${e})`);
      }
    });
  });

});

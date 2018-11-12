'use strict';
const assert = require('assert').strict;

module.exports = {
  /***
   * Execute common tests on an Algo instance
   * @param {Algo} algo
   * @param {[validString, sourceString, checkCharacter][]} validCases
   * @param {invalidString[]} invalidStrings
   */
  testAlgo: (algo, validCases, invalidStrings) => {
    describe('Algo type', () => {
      it('implements generate()', () => {
        assert.equal(typeof algo.generate, 'function', 'typeof algo.generate');
      });
      it('implements validate()', () => {
        assert.equal(typeof algo.validate, 'function', 'typeof algo.validate');
      });
      it('implements compute()', () => {
        assert.equal(typeof algo.compute, 'function', 'typeof algo.compute');
      });
      it('implements parse()', () => {
        assert.equal(typeof algo.parse, 'function', 'typeof algo.parse');
      });
    });

    describe('generate()', () => {
      it('generates a valid number', () => {
        for (const [num, src, cc] of validCases) {
          assert.equal(algo.generate(src), num, `generate(${src})`);
        }
      });
    });

    describe('validate()', () => {
      it('returns true if a number is valid', () => {
        for (const [num, src, cc] of validCases) {
          assert.ok(algo.validate(num), `validate(${num})`);
        }
      });
      it('returns false if a number is invalid', () => {
        for (const num of invalidStrings) {
          assert.ok(!algo.validate(num), `validate(${num})`);
        }
      });
    });

    describe('compute()', () => {
      it('computes correct check digit(s)', () => {
        for (const [num, src, cc] of validCases) {
          assert.equal(algo.compute(src), cc, `compute(${src})`);
        }
      });
    });

    describe('parse()', () => {
      it('extracts the source number and check digit(s)', () => {
        for (const [num, src, cc] of validCases) {
          assert.deepEqual(algo.parse(num), [src, cc], `parse(${num})`);
        }
      });
    });
  },
};

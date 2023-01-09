export const assert = {
  ok: (expression, message = "") => {
    if (!expression) {
      throw new Error("Assertion failed" + (message ? ": " + message : ""));
    }
  },
  equal: (actual, expected, message = "") => {
    assert.ok(actual === expected, message);
  },
  throws: (fn, error, message = "") => {
    let caught = undefined;
    try {
      fn();
    } catch (err) {
      if (err instanceof error) {
        caught = err;
      }
    }
    assert.ok(caught !== undefined, message);
  },
};

export const common = {
  /**
   * Execute common tests on an CdigitAlgo instance
   * @param {CdigitAlgo} algo
   * @param {[validString, sourceString, checkCharacter][]} validCases
   * @param {invalidString[]} invalidStrings
   * @param {[sourceNumVals, checkCharacterNumVals][]} numValCases
   */
  testAlgo: (algo, validCases, invalidStrings, numValCases) => {
    describe("CdigitAlgo type", () => {
      it("implements name", () => {
        assert.equal(typeof algo.name, "string", "typeof algo.name");
      });
      it("implements longName", () => {
        assert.equal(typeof algo.longName, "string", "typeof algo.longName");
      });
      it("implements generate()", () => {
        assert.equal(typeof algo.generate, "function", "typeof algo.generate");
      });
      it("implements validate()", () => {
        assert.equal(typeof algo.validate, "function", "typeof algo.validate");
      });
      it("implements compute()", () => {
        assert.equal(typeof algo.compute, "function", "typeof algo.compute");
      });
      it("implements computeFromNumVals()", () => {
        assert.equal(
          typeof algo.computeFromNumVals,
          "function",
          "typeof algo.computeFromNumVals"
        );
      });
      it("implements parse()", () => {
        assert.equal(typeof algo.parse, "function", "typeof algo.parse");
      });
    });

    describe("generate()", () => {
      it("generates a valid number", () => {
        validCases.forEach(([num, src]) => {
          assert.equal(algo.generate(src), num, `generate(${src})`);
        });
      });
      it("generates a valid number that validate() accepts", () => {
        validCases.forEach(([, src]) => {
          assert.ok(
            algo.validate(algo.generate(src)),
            `validate(generate(${src}))`
          );
        });
      });
      it("generates a valid number that parse() can parse", () => {
        validCases.forEach(([, src, cc]) => {
          const actual = algo.parse(algo.generate(src));
          const message = `parse(generate(${src}))`;
          assert.equal(actual.length, 2, message);
          assert.equal(actual[0], src, message);
          assert.equal(actual[1], cc, message);
        });
      });
      it("throws SyntaxError on empty-ish input string", () => {
        for (const e of ["", "        "]) {
          assert.throws(
            () => {
              algo.generate(e);
            },
            SyntaxError,
            `generate("${e}")`
          );
        }
      });
    });

    describe("validate()", () => {
      it("returns true if a number is valid", () => {
        validCases.forEach(([num]) => {
          assert.ok(algo.validate(num), `validate(${num})`);
        });
      });
      it("returns false if a number is invalid", () => {
        invalidStrings.forEach((num) => {
          assert.ok(!algo.validate(num), `validate(${num})`);
        });
      });
      it("throws SyntaxError on empty-ish input string", () => {
        for (const e of ["", "        "]) {
          assert.throws(
            () => {
              algo.validate(e);
            },
            SyntaxError,
            `validate("${e}")`
          );
        }
      });
    });

    describe("compute()", () => {
      it("computes correct check digit(s)", () => {
        validCases.forEach(([, src, cc]) => {
          assert.equal(algo.compute(src), cc, `compute(${src})`);
        });
      });
      it("throws SyntaxError on empty-ish input string", () => {
        for (const e of ["", "        "]) {
          assert.throws(
            () => {
              algo.compute(e);
            },
            SyntaxError,
            `compute("${e}")`
          );
        }
      });
    });

    describe("computeFromNumVals()", () => {
      it("computes correct check digit(s) from numerical values", () => {
        numValCases.forEach(([src, cc]) => {
          const actual = algo.computeFromNumVals(src);
          const message = `computeFromNumVals([${src.join(", ")}])`;
          assert.equal(actual.length, cc.length, message);
          assert.ok(
            actual.every((c, i) => c === cc[i]),
            message
          );
        });
      });
      it("throws SyntaxError on empty input array", () => {
        assert.throws(
          () => {
            algo.computeFromNumVals([]);
          },
          SyntaxError,
          "computeFromNumVals([])"
        );
      });
    });

    describe("parse()", () => {
      it("extracts the source number and check digit(s)", () => {
        validCases.forEach(([num, src, cc]) => {
          const actual = algo.parse(num);
          const message = `parse(${num})`;
          assert.equal(actual.length, 2, message);
          assert.equal(actual[0], src, message);
          assert.equal(actual[1], cc, message);
        });
      });
      it("throws SyntaxError on empty-ish input string", () => {
        for (const e of ["", "        "]) {
          assert.throws(
            () => {
              algo.parse(e);
            },
            SyntaxError,
            `parse("${e}")`
          );
        }
      });
    });
  },
};

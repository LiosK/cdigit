import { common, assert } from "./common.js";
import { mod661_26 as algo } from "../lib/index.js";

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ["BAISDLAFKBM", "BAISDLAFK", "BM"],
    ["GCJFBCIOJTLVOUR", "GCJFBCIOJTLVO", "UR"],
    ["XKFSHTWWCOMYYASPSYTHJWCJ", "XKFSHTWWCOMYYASPSYTHJW", "CJ"],
    ["LTXOIHFVJDZEIVNXTQRPYZIC", "LTXOIHFVJDZEIVNXTQRPYZ", "IC"],
    ["KCBMMBQOYSHXHVOTGSDXKLNU", "KCBMMBQOYSHXHVOTGSDXKL", "NU"],
    ["MHPPPXHROQETTHJDRWSMPJMP", "MHPPPXHROQETTHJDRWSMPJ", "MP"],
  ];

  const invalid = ["BAISDLAFKAB", "GCJFBCIOJTLVOBI"];
  // }}}

  const charMap = Object.fromEntries(
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((c, i) => [c, i]),
  );
  const numVals = valid.map(([, src, cc]) => {
    return [
      [...src.replace(/[^A-Z]/g, "")].map((c) => charMap[c]),
      [...cc].map((c) => charMap[c]),
    ];
  });

  common.testAlgo(algo, valid, invalid, numVals);

  describe("validate()", () => {
    it("accepts alternative check digit pairs", () => {
      assert.equal(algo.generate("ZL"), "ZLZM");
      assert.ok(algo.validate("ZLZM"));
      assert.ok(algo.validate("ZLAB"));
    });
  });
});

// vim: fdm=marker fmr&

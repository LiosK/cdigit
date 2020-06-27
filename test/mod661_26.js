const common = require("./common");
const algo = require("..").mod661_26;

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

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

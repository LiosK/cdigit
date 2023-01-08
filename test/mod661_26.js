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

  const charMap = Object.fromEntries(
    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((c, i) => [c, i])
  );
  const numVals = valid.map(([, src, cc]) => {
    return [
      [...src.replace(/[^A-Z]/g, "")].map((c) => charMap[c]),
      [...cc].map((c) => charMap[c]),
    ];
  });

  common.testAlgo(algo, valid, invalid, numVals);
});

// vim: fdm=marker fmr&

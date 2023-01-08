const common = require("./common");
const algo = require("..").mod27_26;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ["JEJLMGJS", "JEJLMGJ", "S"],
    ["MUFEMSTCATLITB", "MUFEMSTCATLIT", "B"],
    [
      "VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBDD",
      "VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBD",
      "D",
    ],
    ["OWNYDSZNWIBFVBRWRAU", "OWNYDSZNWIBFVBRWRA", "U"],
  ];

  const invalid = [
    "JEJLMGJX",
    "MUFEMSTCATLITH",
    "VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBDR",
    "OWNYDSZNWIBFVBRWRAS",
  ];
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

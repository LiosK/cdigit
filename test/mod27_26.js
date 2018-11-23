const common = require('./common');
const algo = require('..').mod27_26;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ['JEJLMGJS', 'JEJLMGJ', 'S'],
    ['MUFEMSTCATLITB', 'MUFEMSTCATLIT', 'B'],
    ['VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBDD', 'VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBD', 'D'],
    ['OWNYDSZNWIBFVBRWRAU', 'OWNYDSZNWIBFVBRWRA', 'U'],
  ];

  const invalid = [
    'JEJLMGJX',
    'MUFEMSTCATLITH',
    'VAQKBDHZQDYVZIATTNETJULCDAVRMQIEKIBDR',
    'OWNYDSZNWIBFVBRWRAS',
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

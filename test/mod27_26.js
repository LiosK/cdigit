'use strict';
const assert = require('assert').strict;
const common = require('./common');
const algo = require('..').mod27_26;

describe('ISO/IEC 7064, MOD 27-26 algorithm', () => {
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

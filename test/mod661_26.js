'use strict';
const assert = require('assert').strict;
const common = require('./common');
const algo = require('..').mod661_26;

describe('ISO/IEC 7064, MOD 661-26 algorithm', () => {
  // {{{ List sample strings
  const valid = [
    ['BAISDLAFKBM', 'BAISDLAFK', 'BM']
  ];

  const invalid = [
    'BAISDLAFK12',
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

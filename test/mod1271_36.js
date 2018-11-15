'use strict';
const assert = require('assert').strict;
const common = require('./common');
const algo = require('..').mod1271_36;

describe('ISO/IEC 7064, MOD 1271-36 algorithm', () => {
  // {{{ List sample strings
  const valid = [
    ['ISO 793W', 'ISO 79', '3W'],
  ];

  const invalid = [
    'ISO 7912',
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

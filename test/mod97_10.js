'use strict';
const assert = require('assert').strict;
const common = require('./common');
const algo = require('..').mod97_10;

describe('ISO/IEC 7064, MOD 97-10 algorithm', () => {
  // {{{ List sample strings
  const valid = [
    ['79444', '794', '44'],
    ['3214282912345698765432161182', '32142829123456987654321611', '82'],
    ['06 000 0123456758', '06 000 01234567', '58'],
    ['06 000 0123458698', '06 000 01234586', '98'],
  ];

  const invalid = [
    '79445',
  ];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

const common = require("./common");
const algo = require("..").mod1271_36;

describe(`${algo.longName} (${algo.name})`, () => {
  // {{{ List sample strings
  const valid = [
    ["ISO 793W", "ISO 79", "3W"],
    ["W1KDMNBFIZIVIDJQQ0F76S9P", "W1KDMNBFIZIVIDJQQ0F76S", "9P"],
    ["YJLDUW2XAT6JD346NRWT9YKB", "YJLDUW2XAT6JD346NRWT9Y", "KB"],
    ["R7TTSWFWIRP3PND1E42XUOVO", "R7TTSWFWIRP3PND1E42XUO", "VO"],
    ["87AVMBPFNQTY5RSQKSQ6JH92", "87AVMBPFNQTY5RSQKSQ6JH", "92"],
    ["XVMZN7CD83796I1Q65VVZA0J", "XVMZN7CD83796I1Q65VVZA", "0J"],
    ["0TXLE9L2FBO7ZZ1A6QWBBH6M", "0TXLE9L2FBO7ZZ1A6QWBBH", "6M"],
  ];

  const invalid = ["ISO 7912", "ERMSIN9W42JD98", "QGESOPY2YR"];
  // }}}

  common.testAlgo(algo, valid, invalid);
});

// vim: fdm=marker fmr&

#!/usr/bin/env node

const cdigit = require('..');
const program = require('commander');

const algos = new Map([
  ['luhn', 'Luhn Algorithm'],
  ['verhoeff', 'Verhoeff Algorithm'],
  ['damm', 'Damm Algorithm'],
  ['mod11_2', 'ISO/IEC 7064, MOD 11-2'],
  ['mod37_2', 'ISO/IEC 7064, MOD 37-2'],
  ['mod97_10', 'ISO/IEC 7064, MOD 97-10'],
  ['mod661_26', 'ISO/IEC 7064, MOD 661-26'],
  ['mod1271_36', 'ISO/IEC 7064, MOD 1271-36'],
  ['mod11_10', 'ISO/IEC 7064, MOD 11-10'],
  ['mod27_26', 'ISO/IEC 7064, MOD 27-26'],
  ['mod37_36', 'ISO/IEC 7064, MOD 37-36'],
]);


// top-level options
program
  .option('-a, --algo <name>', 'specify check digit algorithm (see below)')
  .on('--help', () => {
    // custom help
    console.log('');
    console.log('Supported Algorithms:');
    const maxlen = Math.max(...[...algos.keys()].map(ss => ss.length));
    algos.forEach((val, key) => {
      console.log(`  ${key.padEnd(maxlen, ' ')}  ${val}`);
    });
    console.log('  (--algo defaults to `luhn\' or CDIGIT_CLI_DEFAULT_ALGO env var if set)');
  })
  .on('command:*', (cmd) => {
    throw Error(`unknown command \`${cmd}'`);
  });


// handler for subcommands
const handler = (str, cmd) => {
  let algo = 'luhn';
  if (typeof cmd.parent.algo === 'string') {
    ({ algo } = cmd.parent);
  } else if (typeof process.env.CDIGIT_CLI_DEFAULT_ALGO === 'string') {
    algo = process.env.CDIGIT_CLI_DEFAULT_ALGO;
  }

  if (!algos.has(algo)) {
    throw Error(`unknown algorithm \`${algo}'`);
  }

  const result = cdigit[algo][cmd.name()](str);
  if (cmd.name() === 'validate') {
    process.exitCode = result ? 0 : 1;
    console.log(`${result ? 'OK' : 'NG'}: ${str}`);
  } else {
    console.log(result);
  }
};

program
  .command('validate <string>')
  .description('check if string is valid')
  .action(handler);

program
  .command('generate <string>')
  .description('generate valid number from string')
  .action(handler);

program
  .command('compute <string>')
  .description('compute check digit from string')
  .action(handler);


// execute
try {
  program.parse(process.argv);

  if (program.args.length === 0) {
    process.exitCode = 1;
    program.help();
  }
} catch (err) {
  process.exitCode = 1;
  console.error(`error: ${err.message}`);
}

#!/usr/bin/env node

const { program } = require("commander");
const cdigit = require("..");

// top-level options
program
  .option("-a, --algo <name>", "specify check digit algorithm by name")
  .on("--help", () => {
    // custom help
    console.log("");
    console.log("Supported Algorithms:");
    const maxlen = Math.max(...cdigit.names.map((ss) => ss.length));
    console.log(`  ${"NAME".padEnd(maxlen, " ")}  ALGORITHM`);
    cdigit.names.forEach((name) => {
      console.log(`  ${name.padEnd(maxlen, " ")}  ${cdigit[name].longName}`);
    });
    console.log(
      "  (--algo defaults to 'luhn' or CDIGIT_CLI_DEFAULT_ALGO env var if set)"
    );
  });

// handler for subcommands
const handler = (str, cmd) => {
  let algo = "luhn";
  if (typeof cmd.parent.algo === "string") {
    ({ algo } = cmd.parent);
  } else if (typeof process.env.CDIGIT_CLI_DEFAULT_ALGO === "string") {
    algo = process.env.CDIGIT_CLI_DEFAULT_ALGO;
  }

  if (!cdigit.names.includes(algo)) {
    throw Error(`unknown algorithm '${algo}'`);
  }

  const result = cdigit[algo][cmd.name()](str);
  if (cmd.name() === "validate") {
    process.exitCode = result ? 0 : 1;
    console.log(`${result ? "OK" : "NG"}: ${str}`);
  } else {
    console.log(result);
  }
};

program
  .command("validate <string>")
  .description("check if string is valid")
  .action(handler);

program
  .command("generate <string>")
  .description("generate valid number from string")
  .action(handler);

program
  .command("compute <string>")
  .description("compute check digit from string")
  .action(handler);

// execute
try {
  program.parse(process.argv);
} catch (err) {
  process.exitCode = 1;
  console.error(`error: ${err.message}`);
}

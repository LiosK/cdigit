#!/usr/bin/env node

import { EOL } from "node:os";
import { program } from "commander";
import * as cdigit from "cdigit";

// top-level options
program
  .option("-a, --algo <name>", "specify check digit algorithm by name")
  .addHelpText(
    "after",
    (() => {
      const lines = [""];
      lines.push("Supported Algorithms:");
      const maxlen = Math.max(...cdigit.names.map((ss) => ss.length));
      lines.push(`  ${"NAME".padEnd(maxlen, " ")}  ALGORITHM`);
      cdigit.names.forEach((name) => {
        lines.push(`  ${name.padEnd(maxlen, " ")}  ${cdigit[name].longName}`);
      });
      lines.push(
        "  (--algo defaults to 'luhn' or CDIGIT_CLI_DEFAULT_ALGO env var if set)"
      );
      return lines.join(EOL);
    })()
  );

// handler for subcommands
const handler = (str, opts, cmd) => {
  const topOpts = program.opts();
  let algo = "luhn";
  if (typeof topOpts.algo === "string") {
    algo = topOpts.algo;
  } else if (typeof process.env.CDIGIT_CLI_DEFAULT_ALGO === "string") {
    algo = process.env.CDIGIT_CLI_DEFAULT_ALGO;
  }

  if (!cdigit.names.includes(algo)) {
    cmd.error(`error: unknown algorithm '${algo}'`);
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
program.parse();

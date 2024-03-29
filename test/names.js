import { assert } from "./common.js";
import * as cdigit from "../lib/index.js";

describe("cdigit.names", () => {
  it("is defined", () => {
    assert.equal(typeof cdigit.names, "object", "typeof cdigit.names");
  });

  it("is an Array", () => {
    assert.ok(cdigit.names instanceof Array, "cdigit.names instanceof Array");
  });

  it("enumerates algorithm names correctly", () => {
    cdigit.names.forEach((name) => {
      assert.equal(typeof cdigit[name], "object", "typeof cdigit[name]");
    });
  });

  it("is consistent with CdigitAlgo#name", () => {
    cdigit.names.forEach((name) => {
      assert.equal(name, cdigit[name].name, "name === cdigit[name].name");
    });
  });
});

const assert = require("assert").strict;
const cdigit = require("..");

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

  it("is consistent with Algo#name", () => {
    cdigit.names.forEach((name) => {
      assert.equal(name, cdigit[name].name, "name === cdigit[name].name");
    });
  });
});

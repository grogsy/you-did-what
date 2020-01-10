// testing command line script:
//     "test": "mocha -w \"{,!(node_modules)/**}/*.test.js\"",

const { expect } = require("chai");

describe("Placeholder test", () => {
  it("always passes", () => {
    expect(true).to.equal(true);
  });
});

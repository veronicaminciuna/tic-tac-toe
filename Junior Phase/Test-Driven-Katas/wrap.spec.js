const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns type string", () => {
    expect(typeof wrap("pugs", 4)).to.equal("string");
  });
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Return given line if wrap of longer length", () => {
    expect(wrap("apple", 5)).to.equal("apple");
  });
  it("Return wraped string", () => {
    expect(
      wrap(
        "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.",
        20
      )
    ).to.equal(
      "Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."
    );
  });
});

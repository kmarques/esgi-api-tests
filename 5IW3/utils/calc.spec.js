const calc = require("./calc");

describe("Calc", function () {
  it("should add two numbers", function () {
    expect(calc.add(1, 2)).toBe(3);
  });

  it("should subtract two numbers", function () {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  it("should multiply two numbers", function () {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  it("should divide two numbers", function () {
    expect(calc.divide(1, 2)).toBe(0.5);
  });
});

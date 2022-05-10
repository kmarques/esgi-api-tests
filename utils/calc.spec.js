//expect(3).toBe(3);
const calc = require("./calc");

describe("Calculator", function () {
  it("should add two numbers", function () {
    expect(calc.add(1, 2)).toBe(3);
  });
  it("should subtract two numbers", function () {
    expect(calc.subtract(3, 2)).toBe(1);
  });
  it("should multiply two numbers", function () {
    expect(calc.multiply(3, 2)).toBe(6);
  });
  it("should divide two numbers", function () {
    expect(calc.divide(3, 2)).toBe(1.5);
  });
});

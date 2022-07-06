//console.log(jest);
//console.log(expect);
//console.log(it, test);
//console.log(describe);
const calc = require("./calc");

describe("Calc", () => {
  test("add", () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  it("substract", () => {
    expect(calc.subtract(1, 2)).toBe(-1);
  });

  it("multiply", () => {
    expect(calc.multiply(1, 2)).toBe(2);
  });

  it("divide", () => {
    expect(calc.divide(1, 2)).toBe(0.5);
  });
});

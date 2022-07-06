describe("Unit tests", () => {
  let improvedCalc;
  const result = {};
  const mock = {
    add: jest.fn().mockReturnValue(result),
    subtract: jest.fn().mockReturnValue(result),
    multiply: jest.fn().mockReturnValue(result),
    divide: jest.fn().mockReturnValue(result),
  };

  beforeAll(() => {
    improvedCalc = require("./improved-calc-di")(mock);
  });

  test("add", () => {
    expect(improvedCalc(1, "+", 2)).toBe(result);
  });

  test("subtract", () => {
    expect(improvedCalc(1, "-", 2)).toBe(result);
  });

  test("multiply", () => {
    expect(improvedCalc(1, "*", 2)).toBe(result);
  });

  test("divide", () => {
    expect(improvedCalc(1, "/", 2)).toBe(result);
  });
});

describe("Functional tests", () => {
  let improvedCalc;
  beforeAll(() => {
    improvedCalc = require("./improved-calc-di")(require("./calc"));
  });

  test("add", () => {
    expect(improvedCalc(1, "+", 2)).toBe(3);
  });

  test("subtract", () => {
    expect(improvedCalc(1, "-", 2)).toBe(-1);
  });

  test("multiply", () => {
    expect(improvedCalc(1, "*", 2)).toBe(2);
  });

  test("divide", () => {
    expect(improvedCalc(1, "/", 2)).toBe(0.5);
  });

  test("error", () => {
    expect(() => improvedCalc(1, "?", 2)).toThrow("Unknown operator");
  });
});

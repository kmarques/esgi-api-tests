//afterAll();
//beforeAll();
//beforeEach();
//afterEach();

describe("Improved Calc", () => {
  const calc = require("./improved-calc");

  test("should add two numbers", () => {
    expect(calc(1, "+", 2)).toBe(3);
  });
  test("should subtract two numbers", () => {
    expect(calc(1, "-", 2)).toBe(-1);
  });
  test("should multiply two numbers", () => {
    expect(calc(1, "*", 2)).toBe(2);
  });
  test("should divide two numbers", () => {
    expect(calc(1, "/", 2)).toBe(0.5);
  });
  test("should throw an error if operator is unknown", () => {
    expect(() => calc(1, "?", 2)).toThrowError(/Unknown operator/);
  });
});

describe("Improved Calc Unit", () => {
  let mock, calc;
  beforeAll(() => {
    mock = {
      add: jest.fn((a, b) => a + b),
      subtract: jest.fn((a, b) => a - b),
      multiply: jest.fn((a, b) => a * b),
      divide: jest.fn((a, b) => a / b),
    };
    jest.mock("./calc", () => mock);
    jest.resetModules();
    calc = require("./improved-calc");
  });
  test("should add two numbers", () => {
    expect(calc(1, "+", 2)).toBe(3);
    expect(mock.add).toHaveBeenCalledWith(1, 2);
  });
  test("should subtract two numbers", () => {
    expect(calc(1, "-", 2)).toBe(-1);
    expect(mock.subtract).toHaveBeenCalledWith(1, 2);
  });
  test("should multiply two numbers", () => {
    expect(calc(1, "*", 2)).toBe(2);
    expect(mock.multiply).toHaveBeenCalledWith(1, 2);
  });
  test("should divide two numbers", () => {
    expect(calc(1, "/", 2)).toBe(0.5);
    expect(mock.divide).toHaveBeenNthCalledWith(1, 1, 2);
  });
  test("should throw an error if operator is unknown", () => {
    expect(() => calc(1, "?", 2)).toThrowError(/Unknown operator/);
  });
});

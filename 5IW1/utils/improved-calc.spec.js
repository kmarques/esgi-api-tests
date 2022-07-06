beforeAll(() => {
  // Create DATABASE
});
afterAll(() => {
  // Drop database
});
beforeEach(() => {
  // Insert fixture
});
afterEach(() => {
  // Restore Database
});

describe("Unit tests", () => {
  let improvedCalc;
  const result = {};
  beforeAll(() => {
    // resetModules
    jest.clearAllMocks();
    jest.resetModules();
    const mock = {
      add: jest.fn().mockReturnValue(result),
      subtract: jest.fn().mockReturnValue(result),
      multiply: jest.fn().mockReturnValue(result),
      divide: jest.fn().mockReturnValue(result),
    };
    jest.mock("./calc.js", () => mock);
    improvedCalc = require("./improved-calc");
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
    jest.unmock("./calc.js");
    jest.resetModules();
    improvedCalc = require("./improved-calc");
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

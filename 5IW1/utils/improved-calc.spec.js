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
  const mock = {
    add: jest.fn().mockReturnValue(result),
    subtract: jest.fn().mockReturnValue(result),
    multiply: jest.fn().mockReturnValue(result),
    divide: jest.fn().mockReturnValue(result),
  };

  beforeAll(() => {
    // resetModules
    jest.clearAllMocks();
    jest.resetModules();
    jest.mock("./calc.js", () => mock);
    improvedCalc = require("./improved-calc");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("add", () => {
    expect(improvedCalc(1, "+", 2)).toBe(result);
    expect(mock.add).toHaveBeenNthCalledWith(1, 1, 2);
    expect(mock.subtract).not.toHaveBeenCalled();
    expect(mock.multiply).not.toHaveBeenCalled();
    expect(mock.divide).not.toHaveBeenCalled();
  });

  test("subtract", () => {
    expect(improvedCalc(1, "-", 2)).toBe(result);
    expect(mock.add).not.toHaveBeenCalled();
    expect(mock.subtract).toHaveBeenNthCalledWith(1, 1, 2);
    expect(mock.multiply).not.toHaveBeenCalled();
    expect(mock.divide).not.toHaveBeenCalled();
  });

  test("multiply", () => {
    expect(improvedCalc(1, "*", 2)).toBe(result);
    expect(mock.add).not.toHaveBeenCalled();
    expect(mock.subtract).not.toHaveBeenCalled();
    expect(mock.multiply).toHaveBeenNthCalledWith(1, 1, 2);
    expect(mock.divide).not.toHaveBeenCalled();
  });

  test("divide", () => {
    expect(improvedCalc(1, "/", 2)).toBe(result);
    expect(mock.add).not.toHaveBeenCalled();
    expect(mock.subtract).not.toHaveBeenCalled();
    expect(mock.multiply).not.toHaveBeenCalled();
    expect(mock.divide).toHaveBeenNthCalledWith(1, 1, 2);
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

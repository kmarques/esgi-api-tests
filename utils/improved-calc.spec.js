beforeEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
});
afterEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
});

describe("Calculator works", function () {
  ["*", "+", "-", "/"].map((operator) => {
    it(`should ${operator} two numbers`, function () {
      const calc = require("./improved-calc");
      const first = Math.random() * 100;
      const second = Math.random() * 100;
      expect(calc(first, operator, second)).toBe(
        eval(`${first} ${operator} ${second}`)
      );
    });
  });

  it("should throw an error if operator is unknown", function () {
    const calc = require("./improved-calc");
    expect(() => calc(1, "?", 2)).toThrowError("Unknown operator: ?");
  });
});

describe("Calculator use calc.js", function () {
  ["*", "+", "-", "/"].map((operator) => {
    it(`should ${operator} two numbers`, function () {
      const mock = {
        add: jest.fn().mockReturnValue(1),
        subtract: jest.fn().mockReturnValue(1),
        multiply: jest.fn().mockReturnValue(1),
        divide: jest.fn().mockReturnValue(1),
      };
      jest.mock("./calc.js", () => mock);
      const icalc = require("./improved-calc");
      const first = Math.random() * 100;
      const second = Math.random() * 100;
      expect(icalc(first, operator, second)).toBe(1);
      switch (operator) {
        case "+":
          expect(mock.add).toHaveBeenCalledWith(first, second);
          break;
        case "-":
          expect(mock.subtract).toHaveBeenCalledWith(first, second);
          break;
        case "*":
          expect(mock.multiply).toHaveBeenCalledWith(first, second);
          break;
        case "/":
          expect(mock.divide).toHaveBeenCalledWith(first, second);
          break;
      }
    });
  });

  it("should throw an error if operator is unknown", function () {
    const spy = jest.spyOn(console, "error");
    const calc = require("./improved-calc");
    expect(() => calc(1, "?", 2)).toThrowError("Unknown operator: ?");
    expect(spy).toHaveBeenCalled();
  });
});

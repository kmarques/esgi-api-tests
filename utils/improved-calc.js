const calc = require("./calc.js");

module.exports = function (a, operator, b) {
  switch (operator) {
    case "+":
      return calc.add(a, b);
    case "-":
      return calc.subtract(a, b);
    case "*":
      return calc.multiply(a, b);
    case "/":
      return calc.divide(a, b);
    default:
      console.error("Unknown operator: " + operator);
      throw new Error("Unknown operator: " + operator);
  }
};

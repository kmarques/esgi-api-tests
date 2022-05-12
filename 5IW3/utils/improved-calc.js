const calc = require("./calc");

module.exports = function main(left, operator, right) {
  switch (operator) {
    case "+":
      return calc.add(left, right);
    case "-":
      return calc.subtract(left, right);
    case "*":
      return calc.multiply(left, right);
    case "/":
      return calc.divide(left, right);
    default:
      throw new Error(`Unknown operator ${operator}`);
  }
};

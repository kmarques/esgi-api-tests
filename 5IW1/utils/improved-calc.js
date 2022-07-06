const calc = require("./calc");

module.exports = function (leftHand, operator, rightHand) {
  switch (operator) {
    case "+":
      return calc.add(leftHand, rightHand);
    case "-":
      return calc.subtract(leftHand, rightHand);
    case "*":
      return calc.multiply(leftHand, rightHand);
    case "/":
      return calc.divide(leftHand, rightHand);
    default:
      throw new Error("Unknown operator");
  }
};

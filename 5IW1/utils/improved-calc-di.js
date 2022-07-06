module.exports = function improvedCalc(calc) {
  if (
    !calc.hasOwnProperty("add") ||
    !calc.hasOwnProperty("subtract") ||
    !calc.hasOwnProperty("multiply") ||
    !calc.hasOwnProperty("divide")
  ) {
    throw new Error("calc object does not have all required methods");
  }

  return function (leftHand, operator, rightHand) {
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
};

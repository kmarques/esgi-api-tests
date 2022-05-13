const { Given, When, Then } = require("@cucumber/cucumber");
const operators = { add: "+", subtract: "-", multiply: "*", divide: "/" };
const { expect } = require("expect");

Given("I have entered {float} into the calculator", function (value) {
  // Write code here that turns the phrase above into concrete actions
  this.values = this.values || [];
  this.values.push(value);
});

When("I press {string}", function (operator) {
  // Write code here that turns the phrase above into concrete actions
  const calc = require("../../utils/improved-calc");
  this.result = calc(this.values[0], operators[operator], this.values[1]);
});

Then("the result should be {float} on the screen", function (result) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.result).toBe(result);
});

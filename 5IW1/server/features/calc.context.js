const {
  Given,
  When,
  Then,
  BeforeAll,
  BeforeStep,
  Before,
} = require("@cucumber/cucumber");
const { expect } = require("expect");
const calc = require("../../utils/calc");

BeforeAll(() => {
  console.log("BeforeAll");
});

Before(function () {
  console.log("BeforeScenario");
  this.beforeScenario = true;
});

BeforeStep(function () {
  console.log("BeforeStep");
  this.beforeStep = true;
});

Given("I have entered {float} into the calculator", function (float) {
  console.log("Before", this.beforeScenario, this.beforeStep);
  this.inputs = [...(this.inputs || []), float];
});

When("I press {string}", function (action) {
  this.result = calc[action](...this.inputs);
});

Then("the result should be {float} on the screen", function (float) {
  expect(this.result).toBe(float);
});

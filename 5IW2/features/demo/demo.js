const {
  Given,
  When,
  Then,
  Before,
  BeforeAll,
  BeforeStep,
} = require("@cucumber/cucumber");
const { expect } = require("expect");

Given("I have a demo step", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("Given");
});

When("I run the demo step", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("When");
});

Then("I should see the demo step in the report", function () {
  console.log("Then");
});

Given("I have {int} cucumbers", function (int) {
  this.initCucumbers = int;
});

When("I eat {int} cucumber", function (int) {
  this.result = this.initCucumbers - int;
});

Then("I should have {int} cucumber", function (int) {
  expect(this.result).toBe(int);
});

BeforeAll(function () {
  console.log("BeforeAll");
});

Before(function () {
  console.log("Before");
});

BeforeStep(function () {
  console.log("BeforeStep");
});

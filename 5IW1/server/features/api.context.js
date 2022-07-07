const {
  Before,
  Given,
  When,
  Then,
  After,
  AfterAll,
} = require("@cucumber/cucumber");
const request = require("supertest");
const { expect } = require("expect");

Before(function () {
  this.client = request(require("../app"));
});

After(function () {
  const { connection } = require("../models");
  connection.query('DELETE FROM "Products"');
});

AfterAll(function () {
  const { connection } = require("../models");
  connection.close();
});

Given("I have a payload", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  this.payload = dataTable.rowsHash();
});

When("I call {string} {string} with the payload", async function (method, url) {
  // Write code here that turns the phrase above into concrete actions)
  this.response = await this.client[method.toLowerCase()](url).send(
    this.payload
  );
});

When("I call {string} {string}", async function (method, url) {
  // Write code here that turns the phrase above into concrete actions
  this.response = await this.client[method.toLowerCase()](url).send();
});

Then("I should get a {int} response code", function (int) {
  // Then('I should get a {float} response code', function (float) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.status).toBe(int);
});

Then(
  "The property {string} should be present in the response",
  function (string) {
    // Write code here that turns the phrase above into concrete actions
    expect(this.response.body[string]).toBeDefined();
  }
);

Then("The property {string} should be {string}", function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.body[string]).toBe(string2);
});

Then("I should get an empty array", function () {
  // Write code here that turns the phrase above into concrete actions
  expect(this.response.body).toEqual([]);
});

Given("I have no resources", function () {
  // Write code here that turns the phrase above into concrete actions
});

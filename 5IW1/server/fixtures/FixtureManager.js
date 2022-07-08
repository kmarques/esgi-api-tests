const db = require("../models");
const ReferenceManager = require("./ReferenceManager");
const path = require("path");

module.exports = {
  load: async function (file) {
    const filePath = path.join(__dirname, file);
    const fixture = require(filePath);
    const Model = db[fixture.model];
    for (let [key, data] of Object.entries(fixture.data)) {
      ReferenceManager.setReference(key, await Model.create(data));
    }
  },
};

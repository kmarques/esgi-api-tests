const db = require("../../models");
const ReferenceManager = require("./ReferenceManager");

function interpolate(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].replace(/\{\{\s*(.*?)\s*\}\}/g, (match, key) => {
        return ReferenceManager.getValue(key);
      });
    } else if (typeof obj[key] === "object") {
      interpolate(obj[key]);
    }
  }
}

module.exports = async function fixtureLoader(...paths) {
  for (let file of paths) {
    const fixture = require(file);
    const modelName = fixture.model;
    const Model = db[modelName];
    for (let key in fixture.data) {
      let record = fixture.data[key];
      interpolate(record);
      record = await Model.create(record);
      ReferenceManager.setReference(key, record);
    }
  }
};

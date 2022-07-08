const references = {};

module.exports = {
  setReference: (key, value) => {
    references[key] = value;
  },
  getReference: (key) => {
    return references[key] || null;
  },
  getReferenceValue: (path) => {
    const reference = path.split(".");
    let value = references[reference[0]];
    for (let i = 1; i < reference.length; i++) {
      value = value[reference[i]];
    }
    return value;
  },
};

const references = new Map();

module.exports = {
  getReference: function (reference) {
    return references.get(reference);
  },
  setReference: function (reference, value) {
    references.set(reference, value);
  },
  removeReference: function (reference) {
    references.delete(reference);
  },
  getValue: function (fullPath) {
    const [refKey, ...path] = fullPath.split(".");
    const reference = this.getReference(refKey);
    //prop_access
    const value = path.reduce((acc, keyPath) => acc[keyPath], reference);
    return value;
  },
};

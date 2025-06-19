const freezeAndPrepend = (value) => (arr) => {
  const result = [value, ...arr];
  return Object.freeze(result);
};
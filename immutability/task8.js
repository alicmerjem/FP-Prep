const addOrUpdate = (key) => (value) => (obj) => {
  const result = { ...obj, [key]: value };
  return Object.freeze(result);
};
const replaceIfExists = (key) => (value) => (obj) => {
  if (!(key in obj)) return Object.freeze(obj);
  const result = { ...obj, [key]: value };
  return Object.freeze(result);
};
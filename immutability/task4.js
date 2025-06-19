// write a curried replaceInPath that:
// takes a path as an array of keys, a new value and an object
// replaces the value at the given path inside the object
// returns a new frozen object
// you can assume the path exists
// do not modify the original objet or any nested object directly


const replaceInPath = (path) => (value) => (obj) => {
  const clone = (o) =>
    Array.isArray(o)
      ? [...o]
      : typeof o === "object" && o !== null
      ? { ...o }
      : o;

  const setPath = (keys, val, target) => {
    if (keys.length === 0) return val;
    const [key, ...rest] = keys;
    const cloned = clone(target);
    cloned[key] = setPath(rest, val, cloned[key]);
    return cloned;
  };

  const result = setPath(path, value, clone(obj));
  return Object.freeze(result);
};
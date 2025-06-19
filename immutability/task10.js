const toggleInPath = (path) => (obj) => {
  const clone = (o) =>
    Array.isArray(o)
      ? [...o]
      : o && typeof o === "object"
      ? { ...o }
      : o;

  const get = (keys, target) =>
    keys.length === 0 ? target : get(keys.slice(1), target[keys[0]]);

  const set = (keys, val, target) => {
    if (keys.length === 0) return val;
    const [k, ...rest] = keys;
    return {
      ...target,
      [k]: set(rest, val, target?.[k] ?? {}),
    };
  };

  const current = get(path, obj);
  if (typeof current !== "boolean") throw new Error("Not a boolean value");

  const result = set(path, !current, clone(obj));
  return Object.freeze(result);
};


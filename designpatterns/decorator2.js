function wrapObjectValues(fn) {
  return function (obj) {
    const result = {};
    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        const original = obj[key];
        const transformed = fn(original);
        console.log(`Transforming ${key}: ${original} → ${transformed}`);
        result[key] = transformed;
      }
    }
    return result;
  };
}
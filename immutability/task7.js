const shallowFreezeArray = (arr) => {
  const copy = [...arr];
  return Object.freeze(copy);
};
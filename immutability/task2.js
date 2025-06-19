// write a function shallow freeze that will:
// 1 - take an object and return a shallow freeze copy of it
// 2 - the returned obj must not be the same reference as the original
// 3 -  only the top level props are frozen, nested obj props not

const shallowFreeze = (obj) => {
    const copy = { ...obj };
    return Object.freeze(copy);
}

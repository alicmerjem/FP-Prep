// write a curried function setIfNotExists that:
// 1 - takes a key, value and object
// 2 - if key does not exists in the object:
// -- add the key value pair
// -- return a new frozen object
// 3 - if key already exists:
// -- return the original object frozen
// 4 - the function must be curried


const setIfNotExists = (key) => (value) => (obj) => {
    if (obj.hasOwnProperty(key)) return Object.freeze(obj);

    const newObj = { ...obj, [key]: value};

    return Object.freeze(newObj);
}
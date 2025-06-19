// write a curried function toggleFlag
// take a key and an object
// toggle the boolean value at that key
// return a new frozen object
// you can assume:
// -- the key exists in the object
// -- the value is boolean 

const toggleFlag = (key) => (obj) => {
    const newObj = { ...obj, [key]: !obj[key] };
    return Object.freeze(newObj);
  };
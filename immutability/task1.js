// write a curried function freezeAndAppend that:
// 1 - takes a value and an array
// 2 - returns a new frozen array with the value added to the end
// 3 - the original array must remain the same

const freezeAndAppend = (value) => (arr) => {
    const result = [...arr, value];
    return Object.freeze(result);
};
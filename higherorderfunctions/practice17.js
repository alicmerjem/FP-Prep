// DEMETHODIZE
// implement method
// use it to convert array.prototype.map into a function that works on any array

const demethodize1 = (fn) => (obj, ...args) => fn.apply(obj, args);

// example
const map = demethodize1(Array.prototype.map);
const toUpperCase = (s) => s.toUpperCase();

const result = map(["hello", "world"], toUpperCase);
console.log(result); // ["HELLO", "WORLD"]
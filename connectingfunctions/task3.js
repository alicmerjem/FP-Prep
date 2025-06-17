// TASK 3
// rewrtie the following into point free style

const isShortString = (str) => str.length < 8;

// you may use the following helper functions

const getLength = s => s.length;
const lessThan = limit => value => value < limit;

// ok lets go

// we already have the helper functions above so we will not rewrite them

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const isShortString2 = cmpose(lessThan(8), getLength);

console.log(isShortString2("hello"));
console.log(isShortString2("javascript"));
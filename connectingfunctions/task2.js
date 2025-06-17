// TASK 2
// compose url formatter
// create using string functions:
// 1 - removeProtocol(str) 
// 2 - toLowerCase(str)
// 3 - addWWW(str)
// use function composition to combine them into
// one function that prepares URLs for display

const removeProtocol = str => str.remove("http://").remove("https://");
const toLowerCase = str => str.toLowerCase();
const addWWW = str => `www.${str}`;

// composition function
const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

const formatURL = compose(addWWW, toLowerCase, removeProtocol);

console.log(formatURL("https://functionalProgramming.com"));


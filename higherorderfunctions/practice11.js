// ARITY CHANGER
// write unary, binary and ternary using arity general 
// use unary parseint in map to fix the clasic js parseint bug

// Generic arity-limiter
const arity = (n, fn) => (...args) => fn(...args.slice(0, n));

// Specific arity wrappers
const unary = (fn) => arity(1, fn);
const binary = (fn) => arity(2, fn);
const ternary = (fn) => arity(3, fn);

// Classic trap: parseInt with .map()
const numbers = ["10", "20", "30"];
console.log("Bad parseInt:", numbers.map(parseInt)); // [10, NaN, NaN]

// Fixed with unary
console.log("Fixed parseInt:", numbers.map(unary(parseInt))); // [10, 20, 30]

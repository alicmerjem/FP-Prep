// write unary, binary and ternary using general arity function
// use unary(parseInt) in a map() to fix the classic js parseint bug

const arity = (n, fn) => (...args) => fn(...args.slice(0, n));
const unary = (fn) => arity(1, fn);
const binary = (fn) => arity(2, fn);
const ternary = (fn) => arity(3, fn);

// Classic parseInt bug fix:
console.log(["10", "11", "12"].map(parseInt));       // [10, NaN, 1]
console.log(["10", "11", "12"].map(unary(parseInt))); // [10, 11, 12]

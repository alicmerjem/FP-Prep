// CHANGING ARITY
// unary(fn), binary(fn), ternary(fn)
// use arity(n, fn) for general cases
// avoid argument overflow (like with parseInt in map)

const binary = fn => (...a) => fn(a[0], a[1]);
const ternary = fn => (...a) => fn(a[0], a[1], a[2]);

// generic arity limiter
const arity = (n, fn) => (...a) => fn(...a.slice(0, n));

// limits a function to one argumnet
const unary = fn => arity(1, fn);
// limits a function to 2 arguments
const binary2 = fn => arity(2, fn);
// limits a function to 3 arguments
const ternary2 = fn => arity(3, fn);

// EXPLANATION
// ARITY - number of args a function expects
// why do we need it? - because some functions pass more args than we want

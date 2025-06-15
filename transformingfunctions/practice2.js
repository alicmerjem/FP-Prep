// TASK 2: CURRYING WITH BIND
// write a function curry(fn) that will:
// 1 - accept a function fn
// 2 - returns a curried version of fn using fn.bind(null, x)
// 3 - when all argumnets are provided, evaulte the original function
// use curry() on make3 function from previous task
// assing each step of the function call to a variable for clarity V
const f1 = curry(make3);
const f2 = f1("A");
const f3 = f2(2);
const result = fr("Z");
console.log(result);

// original function
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

// curry function using bind
function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return curried.bind(null, ...args);
        }
    };
}

// then we use curry and stuff, lazy to write down
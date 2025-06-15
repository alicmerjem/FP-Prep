// TASK 7: PARTIAL CURRUING WITH CLOSURES
// implement partialCurryByClosure(fn) that:
// accepts a function fn
// returns a new function that accepts arguments from left to right
// when enough arguments are provided, it returns the result of fn(...args)
// use this on make3 function
// demonstrate it by testing

// original function
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

// now here is the real deal
function partialCurryByClosure(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        };
    };
}

// test case
const curried = partialCurryByClosure(make3);

console.log(curried("A")(2)("Z")); 
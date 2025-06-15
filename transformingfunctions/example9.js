// PARTIAL CURRYING
// mix of currying and partial application
// idea: take a function, fix some args, return a new function for the rest
// so we keep returning functions until we get all the arguments

function partialCurry(fn) {
    return fn.length === 0
        ? fn()
        : (...x) => partialCurry(fn.bind(null, ...x));
}



// here is another example

const calculate = (a, b, c, d) => (a + b) * (c - d);

// ^ that is the original function

// break it down
// 1 - add
// 2 - subtract
// 3 - multiply those two

// we will use partialCurry on this

function partialCurry(fn) {
    return fn.length === 0
    ? fn()
    : (...x) => partialCurry(fn.bind(null, ...x));
}

const curriedCalc = partialCurry(calculate);
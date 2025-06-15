// TASK 1
// write a function flexCurry(fn) that curries any function
// of any arity. it should keep returning functions
// until enough arguments are collected

// original function
function sum5(a, b, c, d, e) {
    return a + b + c + d + e;
}

// finished task
function flexCurry(fn, ...args) {
    return (...newArgs) => {
        const allArgs = [...args, ...newArgs];
        return allArgs.length >= fn.length
            ? fn(...allArgs)
            : flexCurry(fn, ...allArgs);
    };
}


// TASK 2
// create an autoCurry(obj) function that takes an
// object with functions and returns an object
// where all functions are curried based on fn.length

// what we have 
const utils = {
    join3: (a, b, c) => `${a}-${b}-${c}`,
    add2: (x, y) => x + y
};

// ok lets go
function flexCurry(fn, ...args) {
    return (...newArgs) => {
        const allArgs = [...args, ...newArgs];
        return allArgs.length >= fn.length
            ? fn(...allArgs)
            : flexCurry(fn, ...allArgs);
    };
}

function autoCurry(obj) {
    const result = {};
    for (const key in obj) {
        if (typeof obj[key] === "function") {
            result[key] = flexCurry(obj[key]);
        }
    }
    return result;
}
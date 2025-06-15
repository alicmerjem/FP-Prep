// TASK 4: PARTIAL APPLICATIONS WITH CLOSURES
// implement a function partial(fn) that:
// accepts a function fn and returns a new function
// accepts some parameters, where undefined represets a parameter to be filled later
// returns a new function that can fill the remainig parameters
// use partial() on make3(a, b, c) to fix the second parameter to 2
// call the resulting fnuction with the first and third parameters

// original function 
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

// partial application w/ using closures
function partial(fn) {
    return function partiallyApplied(...presetArgs) {
        return function(...laterArgs) {
            let finalArgs = [];
            let laterIndex = 0;

            for (let i = 0; i < presetArgs.length; i++) {
                if (presetArgs[i] === undefined) {
                    finalArgs.push(laterArgs[laterIndex++]);
                } else {
                    finalArgs.push(presetArgs[i]);
                }
            }

            finalArgs = finalArgs.concat(laterArgs.slice(laterIndex));

            return fn(...finalArgs);
        };
    };
}


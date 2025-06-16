// MEMOIZING FUNCTIONS
// caches results to avoid redundant computation
// memoize(fn) is simple version for single arguments
// memoize3(fn) supports multiple arguments using JSON.stringify

// this is for multiple arguments
// we defined the empty cache object and the primitives
// after that we make a function that returns any number of arguments
// return simple key if it is a primitive
// turns args into a string if it is complex
// then we return from cahce if it exists
// otherwise compute it and store it
function memoize3(fn) {
    const cache = {};
    const PRIMITIVES = ["number", "string"];

    return function(...args) {
        const strX = args.length === 1 && PRIMITIVES.includes(typeof args[0])
            ? args[0]
            : JSON.stringify(args);

            return strX in cache
            ? cache[strX]
            : (cache[strX] = fn(...args))
    }; 
}

// this is for single primitive arguments, like numbers or strings
// how it works
// cahce is an object that stores results
// if the input x is already in cache, return it
// otherwise, compute it, store it and return it
const memoize = fn => {
    const cache = {};
    return x => x in cache ? cache[x] : (cache[x] = fn(x));
};
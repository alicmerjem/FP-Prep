// MULTI ARGUMENT MEMOIZATION
// write memoize3(fn) that works for any num/type of args using json stringify
// test it iwth a function sum(a, b) and ensure repeated calls are cached

// simple multi arg function
function sum(a, b) {
    console.log(`Computing sum(${a}, ${b})`);
    return a + b;
}

// multi argument memoization
function memoize3(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if(key in cache) {
            console.log(`Cache hit for args: ${key}`);
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// now wrap everything, as per usual
const memoizedSum = memoize3(sum);

// test call
console.log(memoizedSum(5, 7));
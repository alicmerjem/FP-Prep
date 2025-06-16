// SIMPLE MEMOIZATION
// implement memoize(fn) and use it to optimize recursive fibonacci function
// ocmpare execution time with and without memoization

// standard, rather inneficient recursive fibonacci
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// memoization wrapper
function memoize(fn) {

    const cache = {};
    
    return (x) => {
        if (x in cache) {
            return cache[x];
        } 

        const result = fn(x);

        cache[x] = result;

        return result;
    };
}

// timing wrapper
function addTiming(fn, {getTime = () => performance.now(), output = console.log } = {}) {

    return (...args) => {
        const start = getTime();

        try {
            const result = fn(...args);
            const end = getTime();
            output(`${fn.name || "anonymous"} - normal exit ${end - start} ms`);
            return result;
        } catch (err) {
            const end = getTime();
            output(`${fn.name || "anonymous"} - exception!! ${end - start} ms`);
            throw err;
        }
    };
}

// custom timer logger
const timerLogger = {
    getTime: () => performance.now(),
    output: (msg) => console.log(`[Timer] ${msg}`)
};

// Unmemoized timing
const timedFibRaw = addTiming(fib, timerLogger);
console.log("Raw fib(35):", timedFibRaw(35)); // slow!

// Memoized version
const memoizedFib = memoize(function(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

const timedFibMemo = addTiming(memoizedFib, timerLogger);
console.log("Memoized fib(35):", timedFibMemo(35)); // fast!

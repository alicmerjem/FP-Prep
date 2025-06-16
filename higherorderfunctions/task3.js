// implement memoize(fn) and use it to optimize recursive fib function
// compare execution time with and without memoiztation


function memoize(fn) {
    const cache = {};

    return function(x) {
        if(x in cache) return cahce[x];
        return (cache[x] = fn(x));
    };
}

// normal fib
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// memoized fib
let fibMemo;
fibMemo = memoize((n) => (n <= 1 ? n : fibMemo(n - 1) + fibMemo(n - 2)));

// test
console.time("normal");
console.log(fb(35));
console.timeEnd("normal");

console.time("memoized");
console.log(fibmemo(35));
console.time("memoized");
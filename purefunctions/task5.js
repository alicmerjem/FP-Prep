// fix the memoization function
// purity is not the goal, performance is

const cache = [];
function fib(n) {
    if (cache[n] !== undefined) return cache[n];
    if(n < 2) cache[n] = n;
    else cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
}
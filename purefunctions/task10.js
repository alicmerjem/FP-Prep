// memoization again, just to make sure you know this stuff
// but w/ factorial this time 
const cache = []
function factorial(n) {
    if(cache[n] !== undefined) return cache[n];
    if(n===0 || n===1) cache[n] = 1;
    else cache[n] = n * factorial(n - 1);
    return cache[n];
}
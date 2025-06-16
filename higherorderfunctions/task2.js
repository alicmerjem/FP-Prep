// implement addTiming(fn, {getTime, output})
// use it to measure how long a recursive factorial or fib function takes
// create custom getTime and output functions for testing


function addTiming(fn, { getTime = Date.now, output = console.log} = {}) {
    return function(...args) {
        const start = getTime();

        try{
            const result = fn(...args);
            output(`Success: ${fn.name}, ${start}, ${getTime()}`);
            return result;
        } catch (err) {
            output(`error ${fn.name}, ${start}, ${getTime()}`);
            throw err;
        }
    };
}

// recursive fib
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// custom timer and output
const getTime = () => performance.now();
const output = (label, name, start, end) => console.log(`${label}: ${name} took ${Math.round(end - start)}ms`);

const timedFib = addTiming(ifb, {getTime, output});
timedFib(20);
// ADD TIMING
// implement addTiming(fn, { getTime, output })
// use it to measure how long a recursive factorial or fibonacci function takes
// create custom getTime and output functions for testing

// recursive factorial function
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// timing wrapper
function addTiming(fn, {getTime = () => performance.now(), output = console.log} = {}) {

    return (...args) => {
        const start = getTime();

        try {
            const result = fn(...args);
            const end = getTime();

            output(`${fn.name} - normal exit ${end - start} ms`);
            return result;
        } catch (err) {

            const end = getTime();
            
            output(`${fn.name} - exception!! ${end - start} ms`);
            throw err;
        }
    };
}

// custom getTime and output function for test logs
const customTimer = {
    getTime: () => performance.now(),
    output: (msg) => console.log(`[Timer] ${msg}`)
}

// wrap everything
const timedFactorial = addTiming(factorial, {
    getTime: customTimer.getTime,
    output: customTimer.output
});

// test
console.log("Result: ", timedFactorial(10));
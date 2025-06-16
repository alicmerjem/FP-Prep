// TIMING FUNCTIONS
// injects custom timer and logger
// measures function execution duration

function addTiming(fn, { getTime = myGet, output = myPut } = {}) {
    return function(...args) {
        const tStart = getTime();
        try {
            const valueToReturn = fn(...args);
            output("normal exit", fn.name, tStart, getTime());
            return valueToReturn;
        } catch (thrownError) {
            output("exception!!", fn.name, tStart, getTime());
            throw thrownError;
        }
    }
}
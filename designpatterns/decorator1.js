// create a higher order function
// withLogging(fn) that wraps any function and logs it

const add = (x, y) => x + y;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);

const withLogging = (fn) => {
    return (...args) => {
        console.log("Calling function with arguments: ", ...args);
        const result = fn(...args);
        console.log("Function returned: ", result);
        return result;
    };
};
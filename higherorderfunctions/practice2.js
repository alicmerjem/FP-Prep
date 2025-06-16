// ADD LOGGING WITH EXCEPTION HANDLING
// modify your addLogging to addLogging2(fn) using try catch block
// wrap a divide(a, b) function that throws an error if b === 0

// function that may throw
function divide(a, b) {
    if(b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// logging with try catch to make it safer
function addLogging2(fn) {
    return (...args) => {
        console.log(`entering ${fn.name}(${args.join(", ")})`);

        try {
            const result = fn(...args);
            console.log(`exiting ${fn.name} => ${result}`);
            return result;
        } catch (error) {
            console.log(`exiting ${fn.name} => threw ${error}`);
            throw error;
        }
    };
}

// wrap the divide function
const safeDivide = addLogging2(divide);

// test
safeDivide(10, 2);

// test division by 0
try {
    safeDivide(10, 0); 
} catch (e) {
    console.log("caught error", e.message);
}
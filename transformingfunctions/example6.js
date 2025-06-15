// logger with currying
// having a curry() lets us fix some arguments
// while leaving the rest of them open

function myLog(severity, text) {
    console.log(`[${severity}] ${text}`);
}

// ^ this is just a basic logger function
// the output is somethig like [NORMAL] All Systems go!

const curry = (fn) => (...args) => 
    args.length >= fn.length ? fn(...args) : (...rest) => curry(fn)(...args, ...rest);

// ^ this is a custom curry function
// you give it any function and it turns it into a curried version that:
// 1 - takes arguments one at a time
// 2 - waits until it has enough arguments to call the original function

const logNormal = curry(myLog)("NORMAL");
logNormal("All systems go!");
// TASK 5: LOGGER WITH CURRYING
// write a function myLog(severity, logText) that:
// logs message to the console using the correct method based on severity
// NORMAL, WARNING, ERROR
// Defaults to console.log if severity is not known
// write a curry() function that accepts multiple args
// use curry() to fix the severity level and create a reusable logger functions:
// myNormalLog = myLog("NORMAL")
// myWarningLog = myLog("WARNING")
// myErrorLog = myLog("ERROR")
// use those logger functions to log a few text messages

// expected output:
// [NORMAL] All systems go.
// [WARNING] Low battery.
// [ERROR] System failure.

// original logging function
function myLog(severity, logText) {
    const tag = `[${severity}]`;

    switch (severity) {
        case "NORMAL":
            console.log(`{tag} ${logText}`);
            break;
        case "WARNING":
            console.log(`{tag} ${logText}`);
            break;
        case "ERROR":
            console.log(`{tag} ${logText}`);
            break;
        default:
            console.log(`{tag} ${logText}`);
    }
}

// curry function that supports partial application w/ rest parameters
function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        };
    }
}

// create curried version of myLog
const curriedLog = curry(myLog);

const myNormalLog = curriedLog("NORMAL");
const myWarningLog = curriedLog("WARNING");
const myErrorLog = curriedLog("ERROR");


// aaaand use them
myNormalLog("All systems go.");
myWarningLog("Low battery.");
myErrorLog("System failure");
// LOGGING FUNCTIONS
// addLogging is a wrapper function
// logging is handled externally, making it modular and reusable


function addLogging3(fn, logger = console.log.bind(console)) {
    return function(...args) {
        logger(`entering ${fn.name}(${args})`);
        try {
            const valueToReturn = fn(...args);
            logger(`exiting ${fn.name} => ${valueToReturn}`)
            return valueToReturn;
        } catch (thrownError) {
            logger(`exiting ${fn.name} => threw ${thrownError}`);
            throw thrownError;
        }
    };
}

function subtract(a, b) {
    return a - b;
}

// custom logger that formats the message as JSON
function myLogger(message) {
    console.log(JSON.stringify({ level: "debug", message }));
}

// wrap the subtract function
subtract = addLogging3(subtract, myLogger);

// call the wrapped function
subtract(8, 3);
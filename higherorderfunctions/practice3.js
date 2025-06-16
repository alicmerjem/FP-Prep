// PURE LOGGER INJECTION
// write addLogging4(fn, logger) and allow passing a custom json style logget
// try with a logger that writes logs as { level: "debug", message: "..."}

// basic function to wrap
function greet(name) {
    return `Hello, ${name}`;
}

// wrapper logger
function addLogging3(fn, logger = console.log.bind(console)) {
    return (...args) => {

        logger({ level: "debug", message: `entering ${fn.name}(${args.join(", ")})` });

        try {
            const result = fn(...args);
            logger({ level: "debug", message: `exiting ${fn.name} => ${result}` });
            return result;
        } catch (error) {
            logger({ level: "debug", message: `exiting ${fn.name} => threw ${error}` }); 
            throw error;
        }
    };
}

// custom json style logger
const jsonLogger = (logObj) => {
    console.log(JSON.stringify(logObj));
}

// wrap everything up
const loggedGreet = addLogging3(greet, jsonLogger);

// test
loggedGreet("Alice");
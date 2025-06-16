// write a function greet(name) that returns hello name
// create a hof addLogging(fn) that wraps greet and logs args and returns their values
// test it duh

function greet(name) {
    return `Hello, ${name}`;
}

// hof
function addLogging(fn, logger = console.log.bind(console)) {
    return function(...args) {
        logger(`Calling ${fn.name}(${args})`);

        try {
            const result = fn(...args);
            logger(`Result: ${result}`);
            return result;
        } catch (error) {
            logger(`Error: ${error}`);
            throw error;
        }
    };
}

// test 
const loggedGreet = addLogging(greet);
loggedGreet("alice");
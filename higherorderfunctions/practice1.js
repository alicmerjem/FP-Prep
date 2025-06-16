// ADD LOGGING
// write a function greet(name) that returns hello name
// create a hof addLogging(fn) that weaps the greet and logs arguments and return values
// test it ofc

// base function
function greet(name) {
    return `Hello ${name}`;
}

// logging
function addLogging(fn) {

    return (...args) => {

        console.log(`entering ${fn.name}(${args.join(", ")})`);

        const result = fn(...args);
        console.log(`exiting ${fn.name} => ${result}`);

        return result;
    };
}

// wrap greet with logging
const loggedGreet = addLogging(greet);

// test
loggedGreet("Alice");
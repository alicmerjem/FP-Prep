// create once(fn) and once2(fn) and test with an init function
// call it several times and verify it only runs once

function once(fn) {
    let called = false;

    return function(...args) {
        if(!called) {
            called = true;
            return fn(...args);
        }
    };
}

function once2(fn) {
    let done = false;
    let result; 

    return function(...args) {
        if(!done) {
            done = true;
            result = fn(...args);
        };
        return result;
    };
}

// test
const init = () => {
    console.log("Initializing");
    return 42;
}

const onceInit = once2(init);
console.log(onceInit()); // init and returns 42
console.log(onceInit()); // just 42
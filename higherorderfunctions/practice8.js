// RUN ONCE
// create once(fn) and once2(fn) and test with an init function
// call it multiple times to confirm it only runs once

// once: runs once, ignores all calls
function once(fn) {
    let called = false;

    return (...args) => {
        if (!called) {
            called = true;
            fn(...args);
        }
    };
}

// once2: runs once, stores and returns the result on every call
function once2(fn) {
    let called = false;
    let result;

    return (...args) => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

// example init
const initialize = () => {
    console.log("Initializing system...");
    return 42;
}

// test
const initOnce = once(initialize);
initOnce();
initOnce();

const initOnce2 = once2(initialize);
console.log(initOnce2());
console.log(initOnce2());
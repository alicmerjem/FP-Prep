// TASK 9 
// create a generic curryTwoArgs function that curries
// any 2-argument function
// the returned curried function should allow calling
// one argument at a time

// what we have
function joinWords(first, second) {
    return `${first} ${second}`;
}

function curryTwoArgs(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        };
    };
}
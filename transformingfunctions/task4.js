// TASK 4
// create a generic curry2f function that curries any 
// two argument function from left to right

// original function
function announce(who, action) {
    return `${who} is ${action}`;
}

function curry2f(fn) {
    return function(a) {
        return function(b) {
            return fn(a, b);
        };
    };
}
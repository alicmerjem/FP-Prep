// TASK 1 - CURRYING BY HAND
// Define a function amke3 that takes 3 parameters, a b and c
// returns everything in format a:b:c
// rewrite this function using currying, so tha teach function takes only one parameter
// and returns another function
// call your curried function using chained called
// such as make3Curried("A")(2)("Z")

// expected output: A:2:Z

// regular function
function make3(a, b, c) {
    return `${a}:${b}:${c}`;
}

// curried version
function make3Curried(a) {
    return function(b) {
        return function(c) {
            return `${a}:${b}:${c}`;
        };
    };
}

// testing
const result = make3Curried("A")(2)("Z");
console.log(result);
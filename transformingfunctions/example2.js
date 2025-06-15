// currying again
// instead of doing this
function add(a, b) {
    return a + b;
};

// you can do this
function add(a, b) {
    return function(b) {
        return a + b;
    };
}

add(2)(3);

// or you can even do this
function multiply(a, b) {
    return function(b) {
        return a * b;
    };
}

multiply(2)(5);

// or here is another example
const greet = name => greeting => `${greeting}, ${name}`;

const greetJohn = greet("John");
greetJohn("Hello");
greetJohn("Goodbye");
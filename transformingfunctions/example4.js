// currying with bind()
// bind() presets some arguments

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2); // this made the first argument to be 2
console.log(double(5)); // 10



// or here is another example
function curry(fn) {
    return fn.length === 0
        ? fn()
        : (x) => curry(fn.bind(null, x));
}


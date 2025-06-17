// TASK 1: IMPLEMENT A PIPELINE
// write functions double(x), square(x) and subtractFive(x)
// create a pipeline using these functions
// apply this pipeline to the input number 3 and print the result

// functions
const double = x => x * 2;
const square = x => x ** 2;
const subtractFive = x => x - 5;

// pipeline
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// pipeline setup
const processNumber = pipeline(double, square, subtractFive);

// test
console.log(processNumber(3));
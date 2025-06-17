// TASK 3: POINTFREE STYLE
// given the following non pointfree function

const isLongString = (str) => str.length > 10;

// rewrite it using pointfree style
// you will likely need helpers such as

const getLenght = s => s.length;
const greaterThan = limit => value => value > limit;

// test the function, duh

// we have the helper functions above, we will not rewrite them

// now lets do composition
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

// pointfree 
const isLongString2 = compose(greaterThan(10), getLenght);

// test
console.log("Functional programming");
console.log("short");
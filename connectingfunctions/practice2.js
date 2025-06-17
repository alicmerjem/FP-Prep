// TASK 2: COMPOSE FUNCTIONS FOR STRING MANIPULATION
// write three functions:
// 1 - trimSpaces(str)
// 2 - toUpper(str)
// 3 - addExclamation(str)
// use function composition to create a new function that
// performs these operation in order
// apply the function to input " hello world "
// print result

// functions
const trimSpaces = str => str.trim();
const toUpper = str => str.toUpperCase();
const addExclamation = str => `${str}!`;

// composition
const compose = (...fns) => input => fns.reduceRight((acc, fn) => fn(acc), input);

// compose setup
const excitedGreeting = compose(addExclamation, toUpper, trimSpaces);

// test
excitedGreeting(" hello world ");
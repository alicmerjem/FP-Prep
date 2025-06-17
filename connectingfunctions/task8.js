// TASK 8
// rewrite the following into point free style

const isLongWord = (str) => str.length >= 5;

// you may use these helper functions

const getLength = s => s.length;
const greaterOrEqual = (limit) => value => value > limit;

// ok go

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

const isLongword = compose(greaterOrEqual(5), getLenght);
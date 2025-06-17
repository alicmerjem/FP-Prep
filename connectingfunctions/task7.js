// TASK 7
// compose greeting formatter
// create three functions:
// 1 - trim(str)
// 2 - capitalize(str)
// 3 - addGreeting(str)
// use function composition to combine everything

const trim = str => str.trim();
const capitalize = str => str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1).toLowerCase();
const addGreeting = str => `Hello, ${str}.`;

const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

const formatGreeting = compose(addGreeting, capitalize, trim);


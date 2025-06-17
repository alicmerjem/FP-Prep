// TASK 6
// implement these 3 functions:
// 1 - removeVowels(str)
// 2 - reverse(str)
// 3 - addPeriod(str)
// use pipelining 

const removeVowels = str => str.replace(/[aeiou]/gi, '');
const reverse = str => str.split('').reverse().join('');
const addPeriod = str => `${str}.`;

const pipe = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

const transform = pipe(removeVowels, reverse, addPeriod);


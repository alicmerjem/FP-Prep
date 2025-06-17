// TASK 1
// implement three functions:
// 1 - removeVowels(str)
// 2 - reverse(str)
// 3 - addPeriod(str)
// use pipelining to create a new function that performs
// these operations in order

const removeVowels = str => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...str]
        .filter(char => !vowels.includes(char.toLowerCase()))
        .join('');
}

const reverse = str => str.split("").reverse().join("");

const addPeriod = str => `${str}.`;

// now add pipeline
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// and mix it all
const transform = pipe(removeVowels, reverse, addPeriod);
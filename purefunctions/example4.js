// argument mutation
// changing arguments also causes impurity

const maxStrings = arr => arr.sort().pop();
let countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];

console.log(maxStrings(countries)); // answer is uruguay
console.log(countries); // argentina, brasil, paraguay

// so we can tell that the original array was modified
// we do NOT want that

// better solution - create a copy of arguments

const maxStringsPure = a => [...a].sort().pop();
console.log(maxStringsPure(countries)); // uruguay
console.log(countries); // the original array remains unchanged
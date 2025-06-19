// TASK 1: IDENTIFY MUTATION
// given the following function
// explain why its not pure
// rewrite it to make it pure

const maxString = a => a.sort().pop();

const countries = ["Argentina", "Uruguay", "Brasil", "Paraguay"];
console.log(maxStrings(countries)); 
console.log(countries); 

// the original array gets modified, thus, its impure

// refactored version
const maxStringsPure = a => [...a].sort().pop();
console.log(maxStringsPure(countries));
console.log(countries); 

// now we have a copy of the original array
// thus, we ensure purity
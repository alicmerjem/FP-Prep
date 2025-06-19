// MUTATOR FUNCTIONS
// methods that change the original data structure
// examples include:
// sort
// pop
// push
// splice - mutates the array
// reverse

const maxStrings = a => a.sort().pop(); // modified the original

const maxString = a => [...a].sort().pop(); // makes a copy of the array, pure

// REMEMBER: the spread operator is your friend, doesnt get better than that
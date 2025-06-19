// CONST IS NOT ENOUGH
// const prevents reassignmnet
// BUT!!!!!!!!
// not mutation of object properties

const obj = { a: 1 };
obj.a = 2; // this is allowed, surprisingly
obj = { b: 2 }; // nuh uh, type error

// so, const ensures reference immutability, but not deep immutability
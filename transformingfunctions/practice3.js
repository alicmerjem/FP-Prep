// TASK 3: PARTIAL APPLICATION W/ ARROW FUNCTIONS
// create a function nonsense(a, b, c, d, e) that returns a string formatted as a/b/c/d/e
// create a new function fix2and5 using arrow functions, where the second parameter is 22 and fifth is 1960
// call fix2and5 to fill in the spots

// original function
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;

// partially applied function for 22 and 1960
const fix2and5 = (a, c, d) => nonsense(a, 22, c, d, 1960);

// testing
const result = fix2and5('X', 'Y', 'Z');
console.log(result);
// PERSISTENT DATA STRUCTURES
// previous version remain accessible even after updates
// characteristics
// 1 - never mutated - every change produces a new version
// 2 - structural sharing: cunahnedparts are reused. not copied

const original = { a: 1, b: { x: 10, y: 20}};
const updated = setIn(["b", "y"], 99, original);

console.log(original.b === updated.b); // false (new)
console.log(original.b.x === updated.b.x); //true 
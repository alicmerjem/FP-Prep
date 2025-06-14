// pure functions are always easier to understand because:
// 1 - they do not depend on external state
// 2 - they are self contained and only rely on parameters

const circleArea = r => Math.PI * r ** 2;

// testing pure functions is straightforward
const add = (a, b) => a + b;
console.assert(add(2, 3) === 5, "Test failed.");
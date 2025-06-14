// pure functions always return the same result
// no observable side effects

const square = x => x * x;
console.log(square(2)); // always 4
console.log(square(5)); // always 25
console.log(square(5)); // 25 again, no change
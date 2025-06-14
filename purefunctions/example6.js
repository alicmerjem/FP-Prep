// order of execution
// can be executed in any order without affecting the result

let mult = 1;
const f = (x) => {
    mult = -mult;
    return x * mult;
};

console.log(f(2) + f(5)); // 3
console.log(f(5) + f(2)); // - 3

// this is impure
// but if it were pure, the answer would always be the same
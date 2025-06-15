// CURRYING
// currying - break down a function into smaller tasks
// enables you to only work w/ single variable functions
// even if you need multi variable ones

const make3 = (a, b, c) => `${a}:${b}:${c}`;

// here is the curried version
const make3Curried = (a) => (b) => (c) => `${a}:${b}:${c}`;
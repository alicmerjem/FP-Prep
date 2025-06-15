// TASK 6: PARTIAL CURRYING WITH BIND
// writ a function partialCurry(fn) that:
// uses bind to fix multiple args at once
// returns a new function that keeps accepting args till all are provided
// use partialCurry() on a function nonsense like in task 3
// provide arguments in steps

// original function
function nonsense(a, b, c, d, e) {
    return `${a}/${b}/${c}/${d}/${e}`;
}

// partially curry using bind
function partialCurry(fn) {
    return function curried(...args) {
        if(args.length >= fn.lenght) {
            return fn(...args)
        } else {
            const boundFn = fn.bind(null, ...args);
            return partialCurry(boundFn);
        };
    };
}

// now test with partial steps
const pc = partialCurry(nonsense);
const f1 = pc(9, 22);
const f2 = f1(60);
const result = f2(12, 4);

console.log(result);
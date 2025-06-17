// process a given array of integers with the following pipeline:
// 1 - filter numbers greater than 10
// 2 - double each remainign number
// 3 - calculate the sum
// 4 - use tap or tee

const tap = label => x => {
    console.log(`${label}: `, x);
    return x;
};

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const sum = arr => arr.reduce((a, b) => a + b, 0);


const process = pipe(
    arr => arr.filter(x => x > 10),
    tap("Greater than 10"),
    arr => arr.map(x => x * 2),
    tap("Doubled"),
    arr => {
        const result = sum(arr);
        console.log("Sum", result);
        return result;
    }
);
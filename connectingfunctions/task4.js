// TASK 4
// process a given array of integers with the following pipeline:
// 1 - keep only numbers divisible by 5
// 2 - subtract 2 from each remaining number
// 3 - find their average
// 4 - use tap


const tap = label => x => {
    console.log(`${label}:`, x);
    return x;
}

const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

const process = pipe(
    arr => arr.filter(x => x % 5 === 0),
    tap("Divisible by 5"),
    arr => arr.map(x => x - 2),
    tap("After subtracting 2"),
    avg => {
        const result = average(avg);
        console.log("Average", result);
        return result;
    }
);

process([3, 7, 8, 10, 15]);


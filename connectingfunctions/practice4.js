// TASK 4: DEBUGGING PIPELINES
// write a pipeline to process an array of numbers [1, 2, 3, 4, 5, 6]
// the pipeline should:
// 1 - filter even numbers
// 2 - multiply each filtered number by 10
// 3 - calculate the sum of resulting numbers
// insert either tee or tap

// helper functions
const isEven = x => x % 2 === 0;
const multiplyByTen = x => x * 10;
const sum = arr => arr.reduce((acc, val) => acc + val, 0);

// tee for debugging
const tee = label => value => {
    console.log(`${label}: `, value);
    return value;
}

// pipeline
const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// define specific array processing functions
const filterEvens = arr => arr.filter(isEven);
const multiplyAllByTen = arr => arr.map(multiplyByTen);

// create a pipeline with debug steps
const debugPipeline = pipeline(
    filterEvens,
    tee("Filtered"),
    multiplyAllByTen,
    tee("Multipled by 10"),
    sum
);

// excecute pipeline
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Sum: ", debugPipeline(numbers));
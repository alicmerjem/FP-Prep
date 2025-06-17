// TASK 5: TRANSDUCING ARRAYS
// write a transducer to optimizse the following
// chain of operations on an array
// 1 - filter numbers 10 >
// 2 - square each number
// 3 - filter results that are < 500
// implement this useing generalized transudincg function
// print the resulting array after applying your transducers

// initial array
const myArray = [15, 22, 7, 34, 3];

// define simple predicate and transformation
const greaterThan10 = x => x > 10;
const square = x => x * x;
const lessThan500 = x => x < 500;

// create transducer function
const mapTR = fn => reducer => ((accumulator, value) => reducer(accumulator, fn(value)));

// filtering transducer
const filterTR = predicate => reducer => ((accumulator, value) => predicate(value) ? reducer(accumulator, value) : accumulator);

// define final reducer function
const addToArray = (arr, value) => {
    arr.push(value);
    return arr;
}

// compose multiple transducers into a single one
const compose = (...fns) => initial => fns.reduceRight((acc, fn) => fn(acc), initial);

// generalized transducer function
const transduce = (
    arr, 
    transducer,
    reducer = addToArray,
    initial = []
) => {
    const composedReducer = compose(...transducer)(reducer);
    return arr.reduce(composedReducer, initial);
};

// apply transducers to the input data
const result = transduce(myArray, [
    filterTR(greaterThan10),
    mapTR(square),
    filterTR(lessThan500)
]);

// test
console.log(result)
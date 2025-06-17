// TRANSDUCING
// performance optimization technique
// combines multiple transformations into one single pass reducer
// this avoids intermediate arrays

// TASK: keep only odd numbers, duplicate them, filter those under 50, add 3 to the result

const result = myArray 
    .filter(x => x % 2 != 0)
    .map(x => x + x)
    .filter(x => x < 50)
    .map(x => x + 3)


// transduced version

// EXPLANATION
// HOFs - a function that returns a function that returns a function
// fn is a transformation function
// reducer is the next reducer in the chain
// acc is accumulator
// val is the current item
const mapTR = fn => reducer => (acc, val) => reducer(acc, fn(val));
const filterTR = fn => reducer => (acc, val) => fn(val) ? reducer(acc, val) : acc;

// EXPLANATION
// helper functions
// just little pure functions used as ingredients
const testOdd = x => x % 2 === 1;
const duplicate = x => x + x;
const testUnderFifty = x => x < 50;
const addThree = x => x + 3;

// this stacks all the transformative functions into one big function
// this is transducing
const transducer = compose(
  mapTR(addThree),
  filterTR(testUnderFifty),
  mapTR(duplicate),
  filterTR(testOdd)
);

// reducer function
const addToArray = (a, v) => (a.push(v), a);
const result2 = myArray.reduce(transducer(addToArray), []);

// test
console.log(result2); // [21, 25]

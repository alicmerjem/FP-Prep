// RECURSIVE REDUCE AND FIND
// use recursio to accumulate or search data in sequences

const reduceR = (arr, cb, acc) =>
  arr.length === 0 ? acc : reduceR(arr.slice(1), cb, cb(acc, arr[0]));

// if array is empty, return the acc value
// then apply the callback to acc and the first element of the array
// recurse with the rest of the array, the callback and the updates acc

const findR = (arr, cb) =>
  arr.length === 0 ? undefined : cb(arr[0]) ? arr[0] : findR(arr.slice(1), cb);


// if array is empty, return nothing
// check the first element with a callback
// if its true, return arr[0]
// otherwise, recurse with the rest of the array

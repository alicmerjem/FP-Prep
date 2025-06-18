// TASK 1: RECURSIVE SEARCH
// write a function search(arr, key) that returns
// true if key exists in array, otherwise false

function search(arr, key) {
    if(arr.length === 0) {
        return false; // base case, empty array
    } else if(arr[0] === key) {
        return true; // base case, found key
    } else {
        return search(arr.slice(1), key); // recursive case
    }
};

console.log(search([1, 2, 3, 4, 5]));
console.log(search([], 5));
// TASK 6: RECURSIVE MAP
// implement mapR(arr, callback) that mimics array.map using recursion

function mapR(arr, callback) {
    if (arr.length === 0) {
        return []; // base case, empty array
    } else {
        return[callback(arr[0])].concat(mapR(arr.slice(1), callback));
    }
}
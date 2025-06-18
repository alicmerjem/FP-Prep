// RECURSIVE FIND
// implement findR(arr, callback) that mimics arr.find

function findR(arr, callback) {
    if(arr.length === 0) {
        return undefined;
    } else if(callback(arr[0])) {
        return arr[0];
    } else {
        return findR(arr.slice(1), callback);
    }
}
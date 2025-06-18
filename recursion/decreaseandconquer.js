// DECREASE AND CONQUER - SEARCH
// problem is solved by reducing it to a single smaller instance of the problem
// so we reduce the input, usually by a small amount like 1
// then we solve recursively 


// EXAMPLE
// recursively reduce the size of the input
// to locate a target elements 

// way 1
function search(arr, key) {
    if(arr.length === 0) return false;
    return arr[0] === key || search(arr.slice(1), key);
}

// or way 2
function search2(arr, key) {
    if (arr.length === 0) {
        return false;
    } else if (arr[0] === key) {
        return true;
    } else {
        return search(arr.slice(1), key);
    }
}
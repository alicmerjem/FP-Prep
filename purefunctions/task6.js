// analyze the given function
// determine if its pure or not
// if not, refactor

function addOneIncremented(arr) {
    arr[arr.length] = arr[arr.length - 1] + 1;
}


// refactored
const addOneIncremented = (arr) => {
    if (arr.length === 0) return [1];
    return [...arr, arr[arr.length - 1] + 1];
}
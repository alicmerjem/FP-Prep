// TASK 7: RECURSIVE FILTER

function filterR(arr, callback) {
    if(arr.length == 0) {
        return [];
    } else {
        const rest = filterR(arr.slice(1), callback);

        if(callback(arr[0])) {
            return [arr[0]].concat(rest); // include this element
        } else {
            return rest; // exclude this element
        }
    }
}
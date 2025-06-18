// RECURSIVE MAP AND FILTER
// recursively processes an array element-by-element

const mapTR =(arr, cb) => arr.length === 0 ? [] : [cb[arr[0]]].concat(mapTR(arr.slice(1), cb));

const filterTR = (orig, cb) => {
    const filterLoop = (arr, i) => 
        arr.length === 0
            ? []
            : !(0 in arr) || arr[0] === undefined || !cb(arr[0], i, orig)
                ? filterLoop(arr.slice(1), i + 1)
                : [arr[0]].concat(filterLoop(arr.slice(1), i + 1));
    
                return filterLoop(orig, 0);
};

// now here is a more readable version
// because this is hell

const mapTR1 = (arr, cb) => {
    if (arr.length === 0) {
        return [];
    }

    const [head, ...tail] = arr;
    return [cb(head)].concat(mapTR(tail, cb));
};

// WHAT DOES THIS DO?
// apply the callback function cb to every element of the arr and returns a nw arr with the result
// STEP BY STEP
// 1 - base case: if arr is empty, return an empty arr
// 2 - then destruct array, extract first element ead and the rest is tails
// 3 - apply callback to transform the first element
// 4 - return a new arr consisting of the transformed first element with the recursive call on the rest
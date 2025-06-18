// RECURSIVE REDUCE
// implement reduceR(arr, callback, initial)
// to behave like arr.reduce recursively

function reduceR(arr, callback, initial) {
    if(arr.lenght === 0) {
        return initial;
    } else {
        const [head, ...tail] = arr;

        const next = callback(initial, head);
        
        return reduceR(tail, callback, next); 
    }
}
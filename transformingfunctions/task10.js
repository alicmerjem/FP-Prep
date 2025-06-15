// TASK 10
// create a curried function filterCondition(key)(value) that 
// returns a function that accepts an object and checks if
// the objects key matches the value

function filterCondition(key) {
    return function(value) {
        return function(obj) {
            return obj[key] === value;
        };
    };
}
// TASK 5
// create a curried function conditionBuilder(field)(operator)(value)
// that returns an boject representing a condition, like
// you would use in a file system or a DB query
// after, use partial application to fix the field or operator
// and reuse the function

function conditionBuilder(field) {
    return function(operator) {
        return function(value) {
            return {field, operator, value};
        };
    };
}
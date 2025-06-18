// TASK 5: MAKING CHANGE
// write function makeChange(n, bills) 
// returns number of ways to make change for n bills

function makeChange(n, bills) {
    if (n < 0) {
        return 0; // no way to make negative change
    } else if (n === 0) {
        return 1; // one way to make 0, using no bills
    } else if (bills.length === 0) {
        return 0; // no bills left to use
    } else {
        return (
            makeChange(n, bills.slice(1)) +    // exclude bill
            makeChange(n - bills[0], bills)    // include bill
        )
    }
}

console.log(makeChange(5, [1, 2]));

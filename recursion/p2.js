// TASK 2: EFFICIENT POWER FUNCTION
// write a function powerN(base, exp) that computes
// base raised to exp using the divide and conquer method

function powerN(base, exp) {
    if (exp === 0) {
        return 1; // base case
    } else if(exp % 2 === 0) {
        // even exponent
        return powerN(base * base, exp / 2);
    } else {
        // odd exponent
        return base * powerN(base, exp - 1);
    }
};

console.log(powerN(2, 10));
console.log(powerN(3, 0));
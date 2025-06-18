// THINKING RECURSIVELY
// recrusive thinking breaks a problem into smaller subproblems of the same type
// so we have self-reference and base cases involved

function countDown(n) {
    if (n === 0) return;  // base case
    console.log(n); // current action
    countDown(n - 1); // recursive step
}
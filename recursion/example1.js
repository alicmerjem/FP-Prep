// RECURSION - a function calling itself

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
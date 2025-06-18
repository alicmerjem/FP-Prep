// MUTUAL RECURSION
// when two or more functions call each other in a cyclical manner
// each functions handles a specific task and relies on the other for full computation

function isEven(n) {
    return n === 0 ? true : isOdd(n - 1);
};

function isOdd(n) {
    return n === 0 ? false : isEven(n - 1);
};
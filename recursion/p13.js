// IS EVEN IS ODD
// use mutual recursion

function isEven(n) {
    if (n === 0) return true;
    return isOdd(n - 1);
} 

function isOdd(n) {
    if (n === 0) return false;
    return isOdd(n - 1);
}
// TAIL CALL OPTIMIZATION
// a functions returns the result of a recursive
// call directyl, with no extra steps after that

function factorialTail(n, acc = 1) {
    if (n === 0) {
        return acc;
    }
    return factorialTail(n - 1, n * acc);
};

console.log(factorialTail(5));

// why is it a tail call? 

// because the recursive call is the last thing the function does
// no multiplication happens after recursive call
// it is passed in before via acc

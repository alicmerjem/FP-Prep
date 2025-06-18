// CONTINUATION PASSING STYLE 
// instead of returing a result, the function
// calls another function called the continuation and passes the result to it

function factorialCPS(n ,cont) {
    if (n === 0) {
        return cont(1);
    }

    return factorialCPS(n - 1, result => cont(n * result));
};

factorialCPS(5, result => console.log(result));

//we dont need to return the result herre, instead we pass it to cont function
// think of cont as what to do with the result once we have it?
// each level builds a new function that awaits the result from the deeper calls


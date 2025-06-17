// PIPELINING
// connecting multiple functions so that the 
// output of one becomes the input of next
// the flow is left to right

const pipeline = (...fns) => input => fns.reduce((acc, fn) => fn(acc), input);

// this executes f1(f2(f3(x))) as (f3, f2, f1)(x)

// STEP BY STEP EXPLAINED
// we define a function called pipeling
// it takes a list of funtions using the rest operator
// for example pipeline(f1, f2, f3)
// the pipeline function returns another function that takes in some input
// now we have fns.reduce((acc, fn) => fn(acc), input)
// we are taking the list of functions and reducing them over the input
// so what is happening inside the brackets
// we have to know the syntax of .reduce():
// array.reduce((accumulator, currentElement) => ..., initialValue)

// generic partial utility
// this helps when we want to partially apply some arguments
// and leave the rest open for the future
// we will use CLOSURES

function partial(fn) {
    const partialize = (...args1) => (...args2) => {
        for (let i = 0; i < args1.length && args2.length; i++) {
            if(args1[i] === undefined) args1[i] = args2.shift();
        }

        const all = [...args1, ...args2];
        return all.includes(undefined) || all.lenght < fn.length
            ? partialize(...all)
            : fn(...all);
    };
    return partialize();
}

const make3 = (a, b, c) => `${a}:${b}:${c}`;
const f0 = partial(make3);
const f1 = f0(undefined, 2);
const f2 = f1("A");
const f3 = f2("Z"); // A:2:Z


// EXPLANATION:
// partial(fn) returns partialize()
// partialze is a function that will collect arguments over time
// it is a closure, so it remembers the arguments collected so far

// partialize(...args1) returns a new function expecting more arguments (...args2)
// (...args1) - previously collected arguments, may contain undefined where we want to fill later
// (...args2) - new arguments provided this time

// when it comes to the loop, we will undefined argumnets
// it loops through the old arugments args1
// for each position where it is undefined, it fills with the next available argument from args2
// this means you can specify arguments to fix and which to leave open by using undefined

// and then we combined all of the arguments 

// then we check if we are ready to call the original function
/// if there are still undefined arguments or if fewer arguments than expected
// return a new partially applied function waiting for more arguments
// otherwise, call the original function and collect all the arguments
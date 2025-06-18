// THUNKS
// delayed computation
// instead of doing it right now, you return a function
// that will do it later when called

// TRAMPOLINES
// a loop that repeatedly calls thunks until a final value is returned
// allows recursion to happen without growing the call stack
// this is good when TCO is not available

// FACTORIAL WITH A THUNK

function factorialThunk(n, acc = 1) {
    if (n === 0) return () => acc; // final result as a thunk
    return () => factorialThunk(n - 1, n * acc);
}

// NOW WITH A TRAMPOLINE

function trampoline(fn) {
    while(typeof fn === 'function') {
        fn = fn();
    }
    return fn;
}

// and now use it
const result = trampoline(() => factorialThunk(5));
console.log(result);
// THROTTLING
// used to restrict how often a function runs

const throttle = (fn, delay = 1000) => {
    let timer;

    return (...args) => {
        if (!timer) {
            // lock it
            timer = setTimeout(() => {
                timer = undefined; // unlock after delay
            }, delay);
            // execute function right away
            fn(...args);
        };
    };
}

// HOW IT WORKS
// you call the returned function many times
// it check if (!timer) - is it unlcked
// if yes, runs fn(...), starts a timeoutfor delay ms, and locks itself
// until delay passes, further calls are ignored
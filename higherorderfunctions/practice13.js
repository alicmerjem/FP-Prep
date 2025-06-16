// THROTTLE
// write throttle(fn, delay) and simulate rapid button clicks to ensure the function 
// runs only once per time window

// throttle function, only runs fn at most once per delay
function throttle(fn, delay = 300) {
    let waiting = false;

    return (...args) => {
        if (!waiting) {
            waiting = true;
            fn(...args);

            setTimeout(() => {
                waiting = false;
            }, delay);
        }
    };
}

// simulated button click handler
function handleClick() {
    console.log(`Button clicked at ${new Date().toLocaleTimeString()}`);
}

// wrap 
const throttledClick = throttle(handleClick, 1000);

// simulate rapid clicks
let clickInterval = setInterval(throttledClick, 200);

// stop after 5 secs
setTimeout(() => clearInterval(clickInterval), 5000);
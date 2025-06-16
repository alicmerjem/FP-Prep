// implement debounce(fn, delay) and test it w/
// a simulated keypress handler, such as autocomplete

function debounce(fn, delay = 1000) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// simulated key press
const keyPressHandler = debounce(() => {
  console.log("Autocomplete triggered!");
}, 500);

// Simulate typing
keyPressHandler();
keyPressHandler();
keyPressHandler();
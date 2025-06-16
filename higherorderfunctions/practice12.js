// DEBOUNCE
// imeplement debounce(fn, delay) and test it with a simulated keypress handler like autocomplete

// debouncer function, runs fn after delay has passed since last call
function debounce(fn, delay = 300) {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => fn(...args), delay);
    };
}

// simulated autocomplete handler
function fetchSuggestion(query) {
    console.log(`Fetching suggestion for: ${query}`);
}

// wrap it 
const debouncedFetch = debounce(fetchSuggestion, 500);

// simulate rapid keypresses
const fakeTyping = ["a", "ap", "app", "appl", "apple"];
fakeTyping.forEach((q, i) => {
  setTimeout(() => debouncedFetch(q), i * 100);
});
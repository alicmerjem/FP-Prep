// DEBOUNCING
// used to delay execution until user stops triggering

function debounce(fn, delay = 1000) {

  let timer;

  return (...args) => {

    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);

  };
}


// EXPLANATION
// wait until user stops triggering the event, then execute the function
// Why use?
// every time a user types a letter, an api call is triggered
// that is wasteful, so thats why we use it

// CODE EXPLAINED:
// set a timer 
// return any number of args
// the timer gets reset
// only when they stop for delay ms, the function actually runs
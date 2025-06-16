// DEMETODIZING
// turns method into plain function

// spreads args as array, most common
const demethodize1 = (fn) => (arg0, ...args) => fn.apply(arg0, args);

// same as apply, just more explicit
const demethodize2 = (fn) => (arg0, ...args) => fn.call(arg0, ...args);

// creates a bind function then calls it
const demethodize3 = (fn) => (arg0, ...args) => fn.bind(arg0, ...args)();

// same functions basically, just different ways to achieve whatever we need
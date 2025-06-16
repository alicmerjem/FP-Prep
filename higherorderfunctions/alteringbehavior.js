// ALTERING FUNCTION BEHAVIOR
// modify core function results or call conditions
// once(fn), once2(fn) allows single execution
// not(fn) logical negation
// invert(fn) reverses comparator result

const not = (fn) => (...args) => !fn(...args);

const isNegativeBalance = (v) => v.balance < 0;

// example usage of not
const accounts = [
    {name: "Alice", balance: 100},
    {name: "Bob", balance: -50},
    {name: "Charlie", balance: 20}
];

const notDeliquent = accounts.filter(not(isNegativeBalance));
console.log("Accounts with non negative balance: ", notDeliquent);

// now run the function only once
function once2(fn) {
    let done = false;
    let result;

    return function(...args) {
        if (!done) {
            done = true;
            result = fn(...args);
        }
        return result;
    };
}

// example usage of once2
const initialize = once2(() => {
    console.log("Initializing...");
    return 42;
});

console.log(initialize()); // logs initializing then returns 42
console.log(initialize()); // just returns 42, no log


// -----------------------

// now invert result of a comparator function
const invert = (fn) => (...args) => -fn(...args);

// example comparator
const spanishComparison = (a, b) => a.localCOmpare(b, "es");

// example array to sort
const palabras = ["manzana", "arbol", "casa", "nino"];

// sort in reverse using spanish order
palabras.sort(invert(spanishComparison));
console.log("Palabras sorted in spanish order: ", palabras);
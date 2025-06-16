// LOGICAL NEGATION
// write not(fn) that negates a predicate
// use it to filter non negative balances from an array of accounts

// logican negation hof
const not = (fn) => (...args) => !fn(...args);

// sample data
const accounts = [
    {id: "A1", balance: 500},
    {id: "A2", balance: -150},
    {id: "A3", balance: 0},
    {id: "A4", balance: -20},
    {id: "A5", balance: 3000}
];

// predicate: is balance negative
const isNegativeBalance = (acc) => acc.balance < 0;

// use not to get non negative balance
const nonNegativeAccounts = accounts.filter(not(isNegativeBalance));

// output
console.log("Non negative accounts: ", nonNegativeAccounts);
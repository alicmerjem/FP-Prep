// write not(fn) that negates a predicate
// use it to filter non negative balances from an array of accounts

const isNegativeBalance = (acc) => acc.balance < 0;
const not = (fn) => (...args) => !fn(...args);

const accounts = [
  { name: "A", balance: -10 },
  { name: "B", balance: 0 },
  { name: "C", balance: 20 }
];

const nonNegatives = accounts.filter(not(isNegativeBalance));
console.log(nonNegatives);
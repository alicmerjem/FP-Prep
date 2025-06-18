// DYNAMIC PROGRAMMING - MAKE CHANGE
// breaking a complex problem into overlapping subproblems
// solve each problem only once, and store the result (memoize) to avoid redundant computations

// example: 
// recursive solution w/ memoization to count ways to make change

const makeChange = (n, bills) => {
    if (n < 0) return 0; // no way to make negative amount
    if (n === 0) return 1; // exactly one way to make 0, use no bills
    if (bills.length === 0) return 0; // no way, no bills left but still some amount

    return (
        makeChange(n, bills.slice(1)) + makeChange(n - bills[0], bills) // dont use first bill try with rest + use one of the first bills and try to make the rest
    );
};

// now memoized
const makeChangeMemo = (n, bills, memo = {}) => {
  const key = n + '-' + bills.length;
  if (key in memo) return memo[key];
  if (n < 0) return 0;
  if (n === 0) return 1;
  if (bills.length === 0) return 0;

  memo[key] = makeChangeMemo(n, bills.slice(1), memo) + makeChangeMemo(n - bills[0], bills, memo);
  return memo[key];
};



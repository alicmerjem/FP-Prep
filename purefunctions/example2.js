// global state
// makes functions impure

const limitYear = 2004;
const isOldEnough = function (birthYear) {
    return birthYear <= limitYear;
};

console.log(isOldEnough(1960)); // true
console.log(isOldEnough(2010));

// but this does not work because it only works for a certain year

// better approach

const isOldEnough2 = (birthYear, currentYear) => birthYear <= currentYear - 18;
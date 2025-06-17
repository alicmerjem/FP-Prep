// POINTFREE STYLE
// defines functions without explicitly mentioning the arguments


// so instead of doing this:

const double1 = x => x * 2;

// we do this

const multiply = x => y => x * y; // curried
const double = multiply(2); // point free




// ANOTHER EXAMPLE
// cause why not?

// we want a function that:
// 1 - trims a string
// 2 - converts it to lower case
// 3 - adds a period at the end

// regular version 
const cleanSentence = str => addPeriod(toLower(trim(str)));

// now lets pointfree style

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const addPeriod = str => str + '.';

// now instead of writing whatever we wrote up there, we will write
const cleanSentence2 = compose(addPeriod, toLower, trim);

// and then
cleanSentence2(" hello WorLD ");
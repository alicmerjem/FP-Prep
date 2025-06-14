// functions like random and Date functions are impure
// why? - different outputs each time
// they depend on external or global state

const getRandomLetter = () => {
    String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// impurity can also be inherited?
// how? - by calling an impure function
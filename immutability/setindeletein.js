// USING SET IN AND DELETE IN
// set in:
// updated has the new city
// obj is untouched
// user.name and other branches are shared

const myObj = {
    user: { name: "Eva", address: { city: "Paris" } },
};
const updated = setIn(["user", "address", "city"], "London", myObj);

// deleteIn
// returns new object without user address
// original myObj remain unmodified

const clean = deleteIn(["user", "address"], myObj);
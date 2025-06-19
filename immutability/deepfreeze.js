// DEEP FREEZE
// deepFreeze() is a recursive function
// makes an entire object and all of its nested objects immutable
// as we said earlier, object freeze only freezes top level objects

const deepFreeze = (obj) => {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach((prop) => 
        deepFreeze(obj[prop]));
    }
    return obj;
}


// ALSO
// in strict mode, modifying frozen properties throws a type error
const person = {
    name: "Alice",
    address: {city: "Paris", zip: 75000},
};

deepFreeze(person);
person.address.city = "London"; // cant do this
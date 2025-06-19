// TASK 3: DEEP FREEZE NESTED OBJECT
// implement deepFreeze() and use it on a nested obj
// show which changes succeed and fail

const person = {
    name: "Alice",
    address: { city: "Paris", zip: 75000},
};

const deepFreeze = (obj) => {
    if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
        Object.freeze(obj);
        Object.getOwnPropertyNames(obj).forEach((prop) => {
            deepFreeze(obj[prop]);
        });
    };
    return obj;
}

deepFreeze(person);
person.address.city = "London"; // this wont work


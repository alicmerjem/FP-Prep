// FREEZING OBJECTS
// Object.freeze(obj) makes an objects properties read only

const obj = Object.freeze({ a: 1 });
obj.a = 2; // cant do this anymore

// freezing prevents accidental changes
// but it is shallow, meaning that nested objects remain mutable


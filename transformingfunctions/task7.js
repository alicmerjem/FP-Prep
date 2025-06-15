// TASK 7
// create a function autoPartial(obj) that takes 
// an object with functions and returns a new
// object where each function supports partial
// application by fixing the first few arguments

// what we hvae
const tools = {
    greet: (a, b) => `${a}, ${b}`,
    multiply: (x, y) => x * y
}

function autoPartial(obj) {
    const result = {};

    for(const key in obj) {
        if(typeof obj[key] === "function") {
            result[key] = function(...presetArgs) {
                return function(...laterArgs) {
                    return obj[key](...presetArgs, ...laterArgs);
                };
            };
        }
    }

    return result;
}
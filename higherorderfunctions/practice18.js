// METHODIZE
// create method
// yada yada yada

// Function to methodize
function reverse(str, dashed = false) {
  return str.split("").reverse().join(dashed ? "-" : "");
}

// Add to String.prototype
function methodize(obj, fn) {
  obj.prototype[fn.name] = function (...args) {
    return fn(this, ...args);
  };
}

methodize(String, reverse);

// Test
console.log("hello".reverse());         // "olleh"
console.log("hello".reverse(true));     // "o-l-l-e-h"
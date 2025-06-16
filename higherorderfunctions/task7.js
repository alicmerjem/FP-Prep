// create methodize(obj, fn) to add a method to an object
// implement reverse(str, dashed) function and add it to String.prototype.
// so you can call "ABC".reverse(true)

function methodize(obj, fn) {
  obj.prototype[fn.name] = function (...args) {
    return fn(this, ...args);
  };
}

function reverse(str, dashed = false) {
  const rev = str.split("").reverse().join("");
  return dashed ? rev.split("").join("-") : rev;
}

// Add to String
methodize(String, reverse);

console.log("ABC".reverse(true));  // "C-B-A"
console.log("hello".reverse(false)); // "olleh"

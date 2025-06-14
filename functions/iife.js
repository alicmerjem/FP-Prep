(function() {
    console.log("I ran immediately.");
})();

// with parameters
(function(name) {
    console.log("Hello " + name + " !");
})("Merjem");

// or with a return value
let result = (function(a, b) {
  return a + b;
})(3, 4);

console.log(result);  // 7

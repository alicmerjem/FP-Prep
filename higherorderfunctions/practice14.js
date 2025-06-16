// BINARY OP WRAPPER
// implement binaryOp1(op) that returns a function to perform all +, - *
// use it with reduce to sum or multipy arrays

// Operation wrapper
function binaryOp1(op) {
  switch (op) {
    case "+": return (x, y) => x + y;
    case "-": return (x, y) => x - y;
    case "*": return (x, y) => x * y;
    default: throw new Error(`Unsupported operator: ${op}`);
  }
}

// Use with reduce
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce(binaryOp1("+"), 0);       // 15
const product = nums.reduce(binaryOp1("*"), 1);   // 120

console.log("Sum:", sum);
console.log("Product:", product);
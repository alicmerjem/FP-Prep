// using operators as functions
const binaryOp1 = (op) => {
  switch (op) {
    case "+":
      return (x, y) => x + y;
    case "-":
      return (x, y) => x - y;
    case "*":
      return (x, y) => x * y;
    //
    // etc.
    //
    default:
      throw new Error(`Unknown ${op} operator`);
  }
};

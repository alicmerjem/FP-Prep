// PRISMS
// like a lens
// but or data that is optional or in variant form
// works well with:
// 1 - null, undefined
// 2 - tagged union types (discriminated objects)

const prismSuccess = {
  match: (obj) => obj.type === "Success" ? obj.value : null,
  build: (val) => ({ type: "Success", value: val }),
};
// Sample data
const result = { type: "Success", value: 42 };
const error = { type: "Error", message: "Oops" };
// Usage
console.log(prismSuccess.match(result)); // 42
console.log(prismSuccess.match(error));  // null
console.log(prismSuccess.build(99));     // { type: "Success", value: 99 }


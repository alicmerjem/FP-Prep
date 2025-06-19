// EXAMPLE WITH LENS PROP

const lensProp = (key) => (fn) => (obj) =>
  fn(obj[key]).map((val) => ({ ...obj, [key]: val }));

const user = { profile: { name: "Eva", age: 30 } };
const nameLens = compose(lensProp("profile"), lensProp("name"));

view(nameLens)(user);            // "Eva"
set(nameLens)("Amira")(user);    // → { profile: { name: "Amira", age: 30 } }
over(nameLens)(x => x.toUpperCase())(user); // → "EVA"

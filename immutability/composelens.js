// COMPOSITION LENSES
// allow us to build lenses that focus on deeply nested properties

const compose = (lens1, lens2) => (fn) =>
  lens1((inner) => lens2(fn)(inner));

const nameLens = lensProp("profile");
const lastLens = lensProp("last");

const fullLens = compose(nameLens, lastLens);





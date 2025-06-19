// INTRODUCING LENSES
// composable functional abstraction for 
// accessing and updating data w/o mutation

// WHY?
// - simplifies deep data access
// - removes repetitive boilerplate for obj.a.b.c
// - makes get ste transform composable and reusable

// ANALOGY
// think of a lens as a reusable, zoomed in function that
// knows exactly how to read or write a specigic part
// of a complex object

// ------------------------------

// USING VIEW, SET AND OVER
// view(lens)(object) returns the value the lens is focused on
const view = (someLens) => (someObject) => someLens.getter(someObject);

// set(lens)(value)(object) - returns a new obj with the value at the lens focus replaced immutability
const set = (lens) => (newVal) => (obj) => lens.setter(newVal)(obj);

// over(lens)(fn)(object) - applies a function to the value at the lens focus and returns a new object
const over = (lens) => (mapFn) => (obj) => lens.setter(mapFn(lens.getter(obj)))(obj);
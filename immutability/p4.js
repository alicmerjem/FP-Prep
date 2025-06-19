// TASK 3: JSON BASED CLONE
// use JSON.stringify and JSON.parse to deeply clone
// the following object
// then show what happens when you mutate the clone

const original = { name: "Bob", meta: { age: 32 } };

const clone = JSON.parse(JSON.stringify(original));

clone.meta.age = 100; // does not affect anything
// FIELD EXTRACTOR
// use getField(f) to extract properties from objects
// use it with map to get lat and long from an array of location objects

const getField = (f) => (obj) => obj[f];

// example 
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30}
];

const names = people.map(getField("name"));
console.log("Names", names);
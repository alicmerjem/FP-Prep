// CLONING OBJECTS
// cloning creates a new object with the same structure and values
// we have: 
// 1 - SHALLOW COPY
// 2 - DEEP COPY

// shallow copy - only top level is affected
// deep copy - nested props are affected as well

// shallow copy
const shallow = { ...original };

// deep copy w/ json (limited)
const jsonCopy = JSON.parse(JSON.stringify(original));

// drawback of json.stringify
// loses functoins, special objects like date, map etc.
const PI = 3.14159265358979;
const circleArea = r => PI * r ** 2;

console.log(circleArea(5));

// this is a pure function only because PI is a constant
// otherwise, it would be impure
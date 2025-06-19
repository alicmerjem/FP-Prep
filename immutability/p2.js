// TASL 2: FREEZE SHALLOW OBJECT
// freeze the object below and try to modify its properties
// what happens?

const car = { make: "Toyota", model: "Corolla", year: 2020};
Object.freeze(car);

car.model = "Camry"; // siltently fails
console.log(car); // corrola gets logged

'use strict';

const car = { make: "Porsche", model: "911", year: 2020};
Object.freeze(car);

car.model("Spyder");
console.log(car); // type error

// in strict mode, js does not silently ignore attempts to modify frozen objects
// in non strict mode, the line would fall siltently and leave car model untouched



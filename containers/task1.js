// create a container class in javascript that:
// stores a value
// has a map(fn) method that applies the functon to the stored value
// has valueOf and tostring methods

class Container {
  constructor(value) {
    this.value = value;
  }

  // Applies a function to the stored value and returns a new Container
  map(fn) {
    return new Container(fn(this.value));
  }

  // Returns the raw value
  valueOf() {
    return this.value;
  }

  // Returns a string representation
  toString() {
    return `Container(${this.value})`;
  }
}

class Either {
  static of(left, right) {
    return right === null || right === undefined
      ? new Left(left)
      : new Right(right);
  }

  map(_) {
    throw new Error("map() must be implemented in Left or Right");
  }

  isLeft() {
    throw new Error("isLeft() must be implemented in Left or Right");
  }

  toString() {
    return `${this.constructor.name}(${this.value})`;
  }

  valueOf() {
    return this.value;
  }
}

class Left extends Either {
  constructor(error) {
    super();
    this.value = error;
  }

  map(_) {
    return this; // skip mapping
  }

  isLeft() {
    return true;
  }
}

class Right extends Either {
  constructor(value) {
    super();
    this.value = value;
  }

  map(fn) {
    return Either.of(null, fn(this.value));
  }

  isLeft() {
    return false;
  }
}

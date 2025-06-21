// functors
// we need mapfn that returns functor instance
// satisfy 2 functor laws: identity and composition

class Functor {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Functor(fn(this.value));
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `Functor(${this.value})`;
    }
}
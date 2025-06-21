// extends functor into a monad

class Monad {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Monad(fn(this.value));
    }

    chain(fn) {
        const result = fn(this.value);
        return result instanceof Monad ? result : new Monad(result);
    }

    unwrap() {
        let current = this;
        while (current instanceof Monad) {
            if (!(current.value instanceof Monad)) break;
            current = current.value;
        }
        return current.value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `Monad(${this.value})`;
    }

    static of(x) {
        return new Monad(x);
    }
}
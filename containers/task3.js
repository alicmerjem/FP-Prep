// implement maybe
// also add just(x)
// nothing()
// map(fn) duh

class Maybe {
    static of(value) {
        return value === null || value === undefined
            ? new Nothing() 
            : new Just(value);
    }

    map(fn) {
        throw new Error("map must be implemented in subclasses");
    }

    isNothing() {
        throw new Error("isnothing must be impleneted in subclasses");
    }

    toString() {
        return `${this.constructor.name}${this.value}`;
    }

    valueOf() {
        return this.value;
    }
}

class Just extends Maybe {
    constructor(value) {
        super();
        this.value = value;
    }

    map(fn) {
        return Maybe.of(fn(this.value));
    }

    isNothing() {
        return false;
    }
}

class Nothing extends Maybe {
    constructor() {
        super();
        this.value = value; 
    }

    map(_) {
        return this;
    }

    isNothing() {
        return true;
    }
}
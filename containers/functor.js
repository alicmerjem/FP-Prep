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
}
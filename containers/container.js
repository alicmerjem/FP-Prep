class Container {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return new Container(fn(this.value));
    }

    valueOf() {
        return this.value;
    }
}
// TASK 9: MODIFY A VALUE WITH A LENS
// implement over and use it to tansform a value immutably

class Variable {
    constructor(value) {
        this.value = value;
    }
    
    map(fn) {
        return new Variable(fn(this.value));
    }
}

const lensProp = (key) => (fn) => (obj) => 
    fn(obj[key]).map((val) => ({...obj, [key]: val}));

const compose = (outer, inner) => (fn) => 
    outer((innerObj) => inner(fn)(innerObj));

const over = (lens) => (fn) => (obj) => lens((x) => new Variable(fn(x)))(obj).value;

const user = {
  profile: { name: "Eva", age: 30 },
};


const nameLens = compose(lensProp("profile"), lensProp("name"));


const updatedUser = over(nameLens)((x) => x.toUpperCase())

console.log(updatedUser);
console.log(user);
// METHODIZING
// turning function into method

function methodize(obj, fn) {
    obj.prototype[fn.name] = function(...args) {
        return fn(this, ...args);
    };
}

// EXPLANATION
// obj is a constructor (like string, array, etc..)
// fn is a fucntion that takes the object as its first argument
// fn.name is used to give the method its name
// this is the object the method is being called on
// analyze the given function to determine whether it is pure or not
// if its no pure, refactor it
// if it is already pure, let it remain the same

function sayHello() {
    console.log("Hello world");
}

// fixed function

function sayHello() {
    return "Hello world";
}; 

// OR

const sayHello = () => "Hello world";
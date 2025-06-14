// for logging only in development

let mylog = (sometext) => {
    if (DEVELOPMENT) {
        console.log(sometext);
    } else {
        // do nothing
    }
};

// or we can do this even better with a ternary operator

const myLog = DEVELOPMENT
    ? (sometext) => console.log(sometext)
    : (sometext) => {};
    
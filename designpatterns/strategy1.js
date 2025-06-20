// refactor this to use strategy

function calculate(a, b, method) {
    switch (method) {
        case "add": return a + b;
        case "subtract": return a - b;
        default: throw "Unknown method";
    }
}

// refactored
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

function calculate(a, b, strategy) {
    return strategy(a, b);
}
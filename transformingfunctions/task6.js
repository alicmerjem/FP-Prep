// TASK 6
// write a function flexibleCompose(fn) that
// curries any function and collects args until
// enough are provided to the original function
// then, apply those args in reverse, right to left

function mix(a, b, c) {
    return `${a}-${b}-${c}`;
}

function flexibleCompose(fn, ...args) {
    return (...newArgs) => {
        const allArgs = [...args, ...newArgs];
        return allArgs.length >= fn.length 
            ? fn(...allArgs.slice(0, fn.length).reverse())
            : flexibleCompose(fn, ...allArgs);
    };
}
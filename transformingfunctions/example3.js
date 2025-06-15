// currying by hand
const sum = (x, y) => {
    if (x !== undefined && y !== undefined) {
        return x + y;
    } else if (x !== undefined && y == undefined) {
        return (z) => sum(x, z);
    } else { // if both x and y are undefined
        return sum;
    }
}

// but this can get messy pretty quickly
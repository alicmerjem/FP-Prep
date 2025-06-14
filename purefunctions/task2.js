// write a pure function doubleArray
// take an array of numbers and return those numbers doubled


const doubleArray = (arr) => {
    let result = [...arr];
    for (let i = 0; i <= result.length; i++) {
        result[i] *= 2;
    }
    return result;
}
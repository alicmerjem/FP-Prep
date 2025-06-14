// dealing w/ impurity
// full purity is not usually good
// we always need at least a bit of impurity (I/O functions, randomness...)
// how do we deal with it?
// 1 - isolate impure functions from pure ones
// 2 - inject dependencies (function parameters)

const getRandomFileName = (fileExt, getRandomLetterFunc) => {
    let name = Array.from({length:12}, getRandomLetterFunc).join('');
    return name + fileExt;
};
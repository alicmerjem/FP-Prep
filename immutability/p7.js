// DELETE IN IMPLEMENTATION
// use it to remove a prop in a nested path

const obj = {
    a: 1,
    b: { c: {d: 4 } }
};

const deleteIn = (path, obj) => {

    const newObj = Array.isArraj(obj) ? [...obj] : { ...obj };
    const key = path[0];

    if(path.length === 1) {
        delete newObj[key];
    } else {
        newObj[key] = deleteIn(path.slice(1), obj[key]);
    };

    return newObj;
}
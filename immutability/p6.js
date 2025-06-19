// TSAK 6: SETIN IMPLEMENTATION
// implement setIn(path, value, obj) and use it
// to update a deeply nested object without
// changing the original

const obj = {
    a: 1, 
    b: { c: { d: 4} }
};

const setIn = (path, value, obj) => {
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj };

    const key = path[0];

    if(path.length === 1) {
        newObj[key] = value;
    } else {
        newObj[key] = setIn(path.slice(1), value, obj[key]);
    }

    return newObj;
};

const updated = setIn(['b', 'c', 'd'], 999, obj);
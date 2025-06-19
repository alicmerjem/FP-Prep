// GETTERS AND SETTERS
// used to access and update object props immutably
// (like the stuff we did on oop)

// Getter: getByPath(path, obj)
// uses an array of prop keys to access nested data
// returns a deep copy of the value to maintain purity

getByPath(["user", "address", "city"], user); // "Berlin"

// Setter: updateObject(path, obj, value)
// uses a deep copy and applies the value immutably

const updated = updateObject(["profile", "name"], user, "Eva");

// original object is untouched
// new object is deeply frozen

// here are the functions
const getByPath = (path, obj) => {
    if (!path.length) return obj;

    const [key, ...rest] = path;

    if (obj == null || typeof obj !== "object" || !(key in obj)) {
        return undefined;
    }

    // recursively go deeper
    return getByPath(rest, obj[key]);
}

const updateObj = (path, obj, value) => {
    if (path.length === 0) return value;

    const [key, ...rest] = path;

    // copy current level
    const newObj = Array.isArray(obj) ? [...obj] : {...obj};

    newObj[key] = updateObj(rest, obj[key], value);

    return newObj;
}
// CUSTOM DEEP COPY
// create a custom recursive function to handle complex structures

const deepCopy = (obj) => {
    if (obj && typeof obj === "object") {
        const result = new obj.constructor();
        Object.getOwnPropertyNames(obj).forEach((prop) => {
            result[prop] = deepCopy(obj[prop]);
        });
        return result;
    }
    return obj;
}; 

// this preserves: 
// 1 - nested objects
// 2 - instance of date, array etc.
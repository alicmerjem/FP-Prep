// MAKING METHODS CHAINABLE
// regular methods that return undefined break chaining
// thats why we use proxies to make methods return the object

function chainify(obj) {

    return new Proxy(obj, {

        get(target, prop, receiver) {
            const value = target[prop];

            if(typeof value === 'function') {
                return (...args) => {
                    const result = value.apply(target, args);
                    return result === undefined ? receiver : result;
                };
            }
            return value;
        }
    });
}

const chained = chainify(myCity);
chained.setName("Paris").setLat(48.8).setLong(2.3);

// chainify explained step by step
// create a new proxy first
// then set up a get(target, prop, receiver) trap
// target - original obj that we passed
// prop - property of method name you are accessing
// receiver - the proxy itself, used to return for chaining
// inside get, fetch the original value:
// const value = target[prop]
// check if it is a function, and if yes, return a wrapper function around it
// 
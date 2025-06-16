// MEMOIZING PROMISES
// caches api call results
// removes cahce on rejection for retry logic
// useful in real time dashboards and client side caching

// HOW DOES THIS WORK? 
// we take an async fn and we have to return a memoized version of it
// we store the cached promise first
// then we return a function with any nnumber of arguments
// inside the function, we convert the args to a string key, so we can cache it
// if it already exists, just return it
// otherwise if function fails remove its result from cache
// and finally we always return a promise, either cached or newly created
function promiseMemoize(fn) {

    const cache = {};

    return function(...args) {
        const strX = JSON.stringify(args);
        if(strX in cache) {
            return cache[strX];
        } 

        cache[strX] = fn(...args).catch((err) => {
            delete cache[strX];
            throw err;
        });

        return cache[strX];
    };
}

// WHAT DOES THIS DO?
// this is the actual function that is getting memoized
// this is an async function that fetches data from an api
// first we log the request
// then we fetch from a mock api
// then parse and return json response
const fetchData = promiseMemoize(async (id) => {

    console.log(`Fetching for id: ${id}`);
    
    const res = await
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return res.json();
});

fetchData(1).then(console.log);
fetchData(1).then(console.log); // second call used cached promise
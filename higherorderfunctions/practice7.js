// PROMISE MEMOIZATION
// implement promiseMemoize(fn)
// memoize an async function that fetches data (from that json placeholder mock api)
// show that repeated calls return cached promise

// async memoiztation function w/ error handling
function promiseMemoize(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if(key in cache) {
            console.log(`Promise cahce hit for ${key}`);
            return cache[key];
        }

        cache[key] = fn(...args).catch(err => {
            delete cache[key];
            throw err;
        });
        return cache[key];
    };
}

// fetch data from mock api
const fetchData = promiseMemoize(async (id) => {
    console.log(`Fetching data for id: ${id}`);
    const res = await
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

    if(!res.ok) {
        throw new Error("fetch failed");
    } 
    return res.json();
});


// run the test
fetchData(1).then(console.log("first fetch", data));
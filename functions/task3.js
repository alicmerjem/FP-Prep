// write a function fetchData that retusn a 
// promise that resolves with data received
// after 2 seconds

// if you type fetchData().then(console.log)
// the output will be data received

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received")
        }, 2000);
    });
};
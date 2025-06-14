// cleaner alternative to a callback

fetch("https://api.example.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
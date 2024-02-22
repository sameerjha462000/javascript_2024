// Original way of fetching the data from an API. Does not support promises. So we are going to have a lot of
// callbacks if we have a nested request.

// WTF is wrong with this weird capitalization. Plus its ugly syntax.

// We must first create a request object
const xhrRequest = new XMLHttpRequest();

xhrRequest.addEventListener('load', function () {
    console.log("It worked");
    
    // When the request is succesfull, the data is stored in .responseText in the form of string
    let data = this.responseText; // Stringified JSON object

    // To convert the data into a JS object, We can use the method JSON.parse
    data = JSON.parse(data); // This is a JS object

    console.log(data);
    // print the name of all planets

    for (let planet of data.results) {
        console.log(planet.name);
    }
});

xhrRequest.addEventListener('error', function () {
    console.log("Request worked");
});

// before sending the request to the API, we must open it
xhrRequest.open('GET', 'https://swapi.dev/api/planets');

// It is mandatory that we have defined 'load' and 'error' before sending the request to the API
// This part of the code is handled by the browser. This is NOT done by the JS
xhrRequest.send();

console.log("Request sent");

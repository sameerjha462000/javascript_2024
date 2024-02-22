const printPlanets = (data) => {
    for (let planet of data.results) {
        console.log(planet.name);
    }
    return fetch(data.next);
}

const responseToJSONConverter = (response) => {
    if (!response.ok) {
        return new Error(`error code, ${ response.status }`);
    }
    return response.json(); // It gives us a JS object when resolved
};

fetch('https://swapi.dev/api/planets')
    .then(responseToJSONConverter)
    .then(printPlanets)
    .then(responseToJSONConverter)
    .then(printPlanets)
    .then(responseToJSONConverter)
    .then(printPlanets)
    .catch((err) => { 
        console.log("OOPS!!! We screwed up...");
    })
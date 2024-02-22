// We want to get the data of the first movie in which the first planet appeared
const xhrRequest = new XMLHttpRequest();

xhrRequest.addEventListener('load', function () {
    console.log("It worked");
    let data = this.responseText; // Stringified JSON object

    data = JSON.parse(data);

    const firstPlanet = data.results[0];
    const filmURL= firstPlanet.films[0];

    console.log(filmURL);

    // Now we will send a second request to the server for loading the data of this movie
    const filmReq = new XMLHttpRequest();

    filmReq.addEventListener('load', function () { 
        console.log('Second request sent');
        const filmData = JSON.parse(filmReq.responseText);
        console.log(filmData)
    })

    filmReq.addEventListener('error', function () { 
        console.log('Second request failed');
    })

    filmReq.open('GET', filmURL);
    filmReq.send();

});

xhrRequest.addEventListener('error', function () {
    console.log("Request worked");
});

xhrRequest.open('GET', 'https://swapi.dev/api/planets');
xhrRequest.send();
console.log("Request sent");



// Ahh, I just forgot to mention that XMLHttpRequest does not support promises.
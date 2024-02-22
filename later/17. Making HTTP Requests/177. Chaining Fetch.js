// fetch() returns us a promise
fetch('https://swapi.dev/api/planets')
    .then((response) => { 
        if (!response.ok) {
            throw new Error(`error code ${response.status}`);
        }

        return response.json(); // this would return us a promise
    })
    .then((data) => { 
        console.log(data);
        const filmUrl = data.results[0].films[0];

        // console.log(filmUrl);
        return fetch(filmUrl); // would return us a promise which when resolved would give us back a response object
    })
    .then((response) => { 
        if (!response.ok) {
            throw new Error(`error code ${response.status}`);
        }
        return response.json(); // would return us a promise which when resolved would give us a JSON object
    })
    .then((data) => { // we catch the JSON object passed from the previous then in this argument
        console.log(data);
    })
    .catch((err) => { 
        console.log(err);
        console.log('We screwed up!!!')
    })


// This is the delight of chaining Fetch requests
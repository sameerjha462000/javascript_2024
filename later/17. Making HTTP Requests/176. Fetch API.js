// Fetch API

// Using fetch API, we can use promises
// It gives us back a promise
fetch('https://swapi.dev/api/planets')
    .then((response) => { 

        // When the promise is resolved using the Fetch API we get back a Response object
        console.log(response);
        
        // The actual data is stored inside the body of this response
        // To extract the data from this response object, we need to use json() method which returns a promise and that promise when resolved gives us a json object
        response.json().then((data) => { 
            for (let planet of data.results) {
                console.log(planet.name)
            }
        })
    })
    .catch((err) => { 
        console.log("SOMETHING WENT WRONG WITH FETCH!");
        console.log(err);
    })


    // One downside of Fetch API is that it does not runs the .catch() method if we get a 404 error.
    // It considers 404 error as still a response and thus catch() would not run.
    // The .catch() method would only run when the interet connection is disabled or we are facing some network issue

// SECOND ATTEMPT
fetch('https://swapi.dev/api/planets')
    .then((response) => { 
        if (!response.ok) {
            throw new Error(`Status Code Error: ${response.status}`);
        }

        response.json().then((data) => { 
            for (let planet of data.results) {
                console.log(planet.name)
            }
        })
    })
    .catch((err) => { 
        console.log("SOMETHING WENT WRONG WITH FETCH!");
        console.log(err);
    })
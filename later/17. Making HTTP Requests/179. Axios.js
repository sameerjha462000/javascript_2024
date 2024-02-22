// axios is a promise based HTTP Client for making request to the server

// for using axios, we need to put this code in index.html <script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
axios.get('https://swapi.dev/api/planets')
    .then((res) => { 
        console.log(res); // A JS object
        console.log(res.data);
    })
    .catch((err) => { 
        console.log('OOPS!!! We screwed up...')
    })

// axios.get() returns us a promise which when resolved gives us a JS object.
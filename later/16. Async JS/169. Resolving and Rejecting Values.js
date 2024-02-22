// Resolving and Rejecting promises with values
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const rand = Math.random();

            if (rand < 0.3) {
                reject({status : 404});
            } else {
                const pages = {
                    '/users': [
                        { id: 1, username: 'Bilbo' },
                        { id: 5, username: 'Esmerelda' }
                    ],
                    '/about': 'This is the about page!'
                };

                const data = pages[url];

                // This object would be passed inside .then() method as an argument
                resolve({ status: 200, data });
                
            }
        }, 3000);
    });
}


fakeRequest('/users')
    .then((res) => { 
        console.log(res.data);
        console.log('REQUEST WORKED!');
    })
    .catch((res) => { 
        console.log(res.status);
        console.log('REQUEST FAILED!');
    })





    
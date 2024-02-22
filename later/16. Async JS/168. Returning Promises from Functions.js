// We can also have functions which return promises
const willGetYouADog = new Promise((resolve, reject) => {
    setTimeout(() => { 
        const rand = Math.random();

        if (rand < 0.3) {
            reject();
        } else {
            resolve();
        }
    }, 5000);
});

willGetYouADog
    .then(() => { 
        console.log("YAY!!! We got a dog");
    })
    .catch(() => { 
        console.log(":(( NO dog");
    });


// We can have functions which return promises
const makePromises = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const rand = Math.random();

            if (rand < 0.3) {
                reject();
            } else {
                resolve();
            }
        }, 10000);
    });
}


makePromises()
    .then(() => { 
        console.log({status: 200});
    })
    .catch(() => { 
        console.log({status : 404})
    });






    
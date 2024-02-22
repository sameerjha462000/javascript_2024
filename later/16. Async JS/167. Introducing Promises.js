// promises are a way to resolve the callback hells
// They provide us a short and clear syntax

// Promise is just a JS object
// It has two callbacks -- resolve and reject. Until then the promise is not fulfilled or we may say that it is in pending state

const willGetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    
    if (rand < 0.2) {
        reject();
    } else {
        resolve();
    }
});

// .then() runs when the promise has been resolved
willGetYouADog.then(() => { 
    console.log("YAY WE GOT A DOG!!!");
});

// .catch() runs when the promise has been rejected
willGetYouADog.catch(() => {
    console.log(":( NO DOG");
});

// Example 2
const promise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 10 + 1); // 1 ... 10

    if (rand <= 5) {
        reject();
    } else {
        resolve();
    }
});

// We can also club .then() and .catch() method together
promise.then(() => {
    console.log("promise has been resolved");
}).catch(() => {
    console.log("promise has been rejected");
});







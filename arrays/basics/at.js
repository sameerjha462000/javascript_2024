/*
    The .at() method is used to get an element using indexing. The only new advantage is that we can now use negative
    indexing as well.
*/

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

console.log(animals[-1]) // This would give us undefined as [] doesn't understand negative index.

// To get the last element we can do like this

console.log(animals.slice(-1)[0]) // However, this method is very cumbersome

// So here comes the at() method to the rescue
console.log(animals.at(-1)) // "tortoise"
console.log(animals.at(-2)) // "lizard"
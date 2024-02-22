let nums = [91, 92, 93, 94];

// Map is used to create a new array from existing array

const numsTwice = nums.map(function (num) {
    return num * 2;
});

console.log(numsTwice);


// EXAMPLE 2 -- classify each number into odd and even

const status = nums.map(function (num) {
    return {
            value : num, 
            isEven : num % 2 == 0 ? "even" : "odd"
        };
});


console.log(status);


// EXAMPLE 3

const words = ['asap', 'byob', 'rsvp', 'diy'];

const abbreviations = words.map(function (word){
    return word.toUpperCase().split('').join('.')
});

console.log(abbreviations);

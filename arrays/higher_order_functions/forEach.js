let nums = [21, 22, 23, 24];

// forEach takes two parameters -- the actual number and the index
nums.forEach(function (num, idx) {
    console.log(idx, num);
});


// EXAMPLE 2 -- Segregate even and odd numbers from an array
let numbers = [21, 22, 23, 24, 25, 26];

let oddRes = [];
let evenRes = [];

numbers.forEach(function (num){
    if(num % 2 == 0) evenRes.push(num);
    else oddRes.push(num);
});

console.log(evenRes);
console.log(oddRes);
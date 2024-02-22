/*
    In order to flat an array, we use flat.js.
    We can also pass in the depth upto which we want to flatten the array.
    This is an immutable method i.e this does not modify the original array.
    Instead it gives us a new array.
*/

const arr = [1, 2, 3, 4, [5]] 

console.log(arr.flat(1)) // [ 1, 2, 3, 4, 5 ]
console.log(arr) // [ 1, 2, 3, 4, [ 5 ] ]


const anotherArr = [1, 2, 3, 4, [[5]]]
console.log(anotherArr.flat(2)) // [ 1, 2, 3, 4, 5]
console.log(anotherArr.flat(1)) // [1, 2, 3, 4, [5]]
console.log(anotherArr) // [1, 2, 3, 4, [[5]]]





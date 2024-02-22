/*
    The flatMap() method maps each element of an array using a given callback function and then flattens the result by one level. 
    It is equivalent to using map() followed by flat(1), but it’s slightly more efficient than calling those two methods separately.
*/

const nums = [1, 2, 3]

console.log(nums.map((num) => num === 2 ? [2, 2] : num)) // [ 1, [ 2, 2 ], 3 ]
console.log(nums.map((num) => num === 2 ? [2, 2] : num).flat(1)) // [1, 2, 2, 3]

// OR we can use this way using flatMap

console.log(nums.flatMap((num) => num === 2 ? [2, 2] : num))
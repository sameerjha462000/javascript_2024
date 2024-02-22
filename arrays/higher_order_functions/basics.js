// Each of these HOF for array receive a callback function which receives paramters in (nums, index, arr) order.

const nums = [4, 3, 2, 1];

/* 
    The callbacks receive the paramters in a certain order. The first parameter to the callback would always be the element
    The second parameter to the callback would always be the index of the element.
    The third parameter to the callback would always be the array itself.
*/

nums.forEach((num, index, arr) => {
    console.log(num, index, arr)
})


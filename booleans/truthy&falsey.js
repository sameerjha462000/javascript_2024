/*
    In JS, we have precisely 5 falsey values. These are
        -- '', 0, undefined, null, false

    Rest all values are truthy values.
*/


console.log(Boolean('')) // false
console.log(Boolean(false)) // false
console.log(Boolean(0)) //  false
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
 
console.log('==========SOME TRUTHY VALUES==========')

console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean(() => { })) // true
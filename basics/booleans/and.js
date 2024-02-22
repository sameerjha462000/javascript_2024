/*
    In JS, we have && operator which returns true only when all the values are true

    true && true => true
    true && false => false
    false && true => false
    false && false => false
*/

const one = true && true
const two = true && false
const three = false && true
const four = false && false

console.table([one, two, three, four])



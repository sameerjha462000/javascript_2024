/**
    we also have the ||(pipe) operator which works like or operator.
    It returns true if either of the arguments is true.

    true || true => true
    true || false => true
    false || true => true
    false || false => false
*/

const one = true || true // true
const two = true || false //  true
const three = false || true //  true
const four = false || false // true

console.table([one, two, three, four])
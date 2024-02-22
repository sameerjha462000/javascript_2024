/**
    The && operator knows that the answer is false as soon as it encounters the first falsey value.
    The || operator knows that the answer is true as soon as it encounters the first truthy value.

    This is called short circuiting.

    So the answer of || operators is the first truthy value or the last falsey value.
    and the answer of && operators is the first falsey value or the last truthy value

    In JS, we have only 5 falsey values ==> 0, null, undefined, '', false
    Everything else is true.
*/


console.log('Abhishek' || true) // 'Abhishek'

/*
    Explanation:
    As soon as it encountered the first truthy value ("Abhishek"), it knew right away that the answer is true,
    hence the value of this expression would be the first truthy value it encountered.
*/

console.log(23 || false) // 23 --> first truthy value

console.log(false || 23) // 23 --> first truthy value

console.log('' || false) // false --> last falsey value

console.log('================AND===============')
console.log(true && 23) // 23 --> last truthy value
console.log(true && undefined) // undefined --> first falsey value
console.log(null && true) // null --> first falsey value
console.log(0 && null) // 0 --> first falsey value


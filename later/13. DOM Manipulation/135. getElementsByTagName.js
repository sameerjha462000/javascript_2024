/**
 * getElementsByTagName() returns us a HTML collection.
 * It returns us the Collection of all the elements whose tag name matches the string passed into the parameter.
 */
document.getElementsByTagName("input"); // HTMLCollection(3) [input, input, input]

document.getElementsByTagName("p"); // HTMLCollection(2) [p, p#main, main: p#main]

document.getElementsByTagName("li"); // HTMLCollection(3) [li.special, li, li.special]

document.getElementsByTagName("h1"); // HTMLCollection [h1]

document.getElementsByTagName("h3"); // HTMLCollection []

/**
 * But what is this HTMLCollection[] object.
 * It is not array, it is an array-like object.
 * We can access elements by using square bracket and we also have length attribute.
 */

const inputs = document.getElementsByTagName("input");

inputs[0]; // <input type="text" placeholder="Bear Name"></input>
inputs[1]; // <input type="password" placeholder="password" />
inputs[2]; // <input type="submit" />

// HTMLCollection[] is an iterable, hence we can iterate over it
for (let input of inputs) {
  console.log(input);
}

// We can also convert it into an array using the spread operator
const arr = [...inputs];

// each input element has a property called 'value'
for (let input of inputs) {
  console.log(input.value); // This will show us the value entered by the user in the input boxes.
}

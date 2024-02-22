/**
 * Every function has an object inside it called argument object.
 *
 * It is an array-like object. It does have a length property but we cannot use common array methods like push, pop in it.
 *
 * It is not available inside of an arrow function
 */

function sum() {
  console.log(arguments); // It is an array like object but not an actual array

  const argsArr = [...arguments]; //  To convert arguments object into an array

  return argsArr.reduce((total, currValue) => total + currValue);

  // The below is an error as arguments objects is NOT an array.
  // return arguments.reduce((total, currValue) => total + currValue);
}

// arguments object is NOT a thing in arrow functions
const multiply = (a, b) => {
  console.log(arguments); // No such object inside an arrow function
};

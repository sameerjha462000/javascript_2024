// The rest parameter is used to collect all the remaining parameters into an array

// We can use it to collect all arguments
function sum(...nums) {
  return nums.reduce((total, currValue) => total + currValue);
}

// We can also use it to collect remaining arguments

function fullName(first, last, ...titles) {
  console.log(first);
  console.log(last);

  console.log(titles);
}

// Because of the way rest works we can have only one rest parameter and that too at the end.

// so below are invalid

// function f1(...rest, x){} // This is wrong as nothing would be left after collecting through rest
// function f2(...rest1, ...rest2) {} // This is also wrong as after collecting everything thru rest1, there is nothing left to be collected in rest2

// Simply put, a rest parameter must be the last formal parameter in the parameter list

// We can also use rest parameters in arrow functions
const multiply = (...nums) =>
  nums.reduce((pro, currValue) => pro * currValue, 1);

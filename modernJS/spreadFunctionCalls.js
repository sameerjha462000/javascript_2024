// It is not supported in Internet Explorer
// It is used to expand iterables such as strings and arrays

const nums = [45, 23, 34, 7, 5];

console.log(Math.max(nums)); // error

// using spread
console.log(Math.max(...nums)); // 45

// Example 2
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];

giveMeFour(colors); // error
giveMeFour(...colors); // expand colors using spread literal

// We can also spread strings using spread literal
giveMeFour("GOAT"); // error
giveMeFour(..."GOAT");

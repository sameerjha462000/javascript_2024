/**
 * It is a newer, all-in-one method to select a single element
 * It is present in most modern browsers, also in internet explorer.
 *  We pass in a CSS selector
 */

const h = document.querySelector("h1");

// It gives us only the first item
const p = document.querySelector("p");

// We can pass in an identity as well by using # sign
const img = document.querySelector("#bear-photo");

// We can also select by class
const special = document.querySelector(".special"); // gives us the first element with class name special

const passWordBox = document.querySelector('input[type = "password"]');

// querySelectorAll() gives us a NodeList

/**
 * NodeList is an array like object but not an array
 */

/**
 * NodeList and HTMLCollection are a lightweight collections like arrays
 */

const li = document.querySelectorAll("li");

li[0];

// We can also loop over NodeList but we cannot iterate over a HTMLCollection
for (let ele of li) {
  console.dir(ele);
  k;
}

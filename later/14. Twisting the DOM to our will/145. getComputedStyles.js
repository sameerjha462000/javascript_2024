// getComputedStyles() gives us the actual style of the JS object

const h1 = document.querySelector("h1");

h1.style.color; // ""

const style = getComputedStyle(h1); // gives us a CSS style declaration

style.color; //  shows us the actual color of h1 tag that we selected

// but we cannot change properties using getComputedStyle()
style.color = "pink"; // Invalid as this is only read-only

// To change the color we need to use style attribute
h1.style.color = "red";

style.color; //rgb(255, 0, 0, 0)

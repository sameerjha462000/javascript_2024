const h1 = document.querySelector("h1");

// We can use the style property to change the current properties but we cannot use it to read
// exisiting properties unless they are inline.
h1.style; // gives us a CSSStyleDeclaration

h1.style.color; // "" as we do not have inline style

h1.style.color = "orchid"; // This would make it inline style, hence it would have the highest priority

// All of the properties in javascript are camelCased
const p = document.querySelector("p");

// In actual we have backgorund-color property
p.style.backgroundColor = "teal";

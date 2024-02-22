const firstLI = document.querySelector("li");

console.dir(firstLI);

firstLI.parentElement;

firstLI.children; // empty collection as this li does not have any children

const ul = firstLI.parentElement;

ul.parentElement; // body

ul.parentElement.parentElement; // html

const lis = ul.children; // We get back a HTML Collection

const secondLI = firstLI.nextElementSibling;

const thirdLI = secondLI.nextElementSibling;

thirdLI.previousElementSibling; // secondLI
thirdLI.previousElementSibling.previousElementSibling; // firstLI

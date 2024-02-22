/**
 * innerHTML gives us all the HTML code that is written inside the HTML element
 * along with tags.
 *
 * What is the diff between innerHTML and innerText ?
 * innerText would show us all the content that would be displayed in the browser
 * and innerHTML would show us all the HTML content that is written inside the HTML element
 */

const h1 = document.querySelector("h1");

h1.innerHTML; // gives us all the HTML code that has been written inside h1 tag

// We can also add new HTMl elements using the innerHTML attribute as innerHTML reads tags as well

h1.innerHTML += "<b> color </b>";

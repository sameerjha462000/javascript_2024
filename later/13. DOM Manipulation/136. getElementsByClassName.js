/**
 * getElementsByClassName() gives us a HTMLCollection based on the class name passed.
 */

const special = document.getElementsByClassName("special");

// If we pass a class name which is not there, then we get an empty collection
const chickens = document.getElementsByClassName("chickens");

// Every DOM object has a copy of getElementsByClassName and getElementsByTagName()
const ul = document.getElementsByClassName("ul")[0];

const specialInsideUl = ul.getElementsByClassName("special");

// We also have getElementsByTagName() inside every element
const liInsideUl = ul.getElementsByClassName("li");

/**
 * We dont have getElementById() inside every element as Id's are suppossed to be unique
 * across the entire document.
 */

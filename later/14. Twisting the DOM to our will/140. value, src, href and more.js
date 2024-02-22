/**
 * All input elements have an attribute called value
 */

const inputs = document.querySelectorAll("input");

inputs[0].value = "Enter here";

// inputs[2] is a checkbox
inputs[2].checked = true; // this would check the box

// inputs[3] is a slider
inputs[3].max = "900";
inputs[3].min = "100";

// We also have 1 more attribute called as placeholder
inputs[1].placeholder = "passcode"; // Initially it was called 'password'

// We also have src attribute for all the image tags
const img = document.querySelector("#bear-photo"); // This selects the
img.src; // We can

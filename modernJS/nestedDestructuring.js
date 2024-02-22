/**
 * Nested destructuring
 */

const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

// Get the name of the country of the second player
const [, { country }] = results;

console.log(country); // "Ethiopia"

// Get the name of the player who won gold medal
const [{ first: goldWinner }] = results;

console.log(goldWinner); // "Eliud"

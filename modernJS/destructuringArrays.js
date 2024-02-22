/**
 * Destructuring arrays
 */
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

const [gold, silver, bronze] = raceResults; // gold = raceResults[0], silver = raceResults[1] and bronze = raceResults[2]

console.log(gold, silver, bronze);

// We can also skip some variables in between
const [first, , , fourth] = raceResults;

console.log(first, fourth);

// We can also use the REST parameters
const [winner, ...others] = raceResults; // all the other members except the winner would be collected in others

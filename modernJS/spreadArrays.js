/**
 * We also have spread in array literals
 */

const cephalopods = [
  "dumbo octupus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

// cephalopods and gastropods are together called as mollusca

const mollusca = [...cephalopods, ...gastropods]; // Note that order does matter
const molluscaAgain = [...gastropods, ...cephalopods]; // This is different from mollusca

const exxtendedMollusca = ["garden slug", ...cephalopods, ...gastropods];

// cephalopods, gastropods and cnidaria are together also called as inverts
const inverts = [...cephalopods, ...gastropods, ...cnidaria];

//////////////////////////////////////// COPYING AN ARRAY USING SPREAD /////////////////////////////////////////
const cephCopy = [...cephalopods]; // This would copy the contents of cephalopods into the cephCopy

console.log(cephCopy === cephalopods); //  false

const cephAgain = cephalopods;

console.log(cephAgain === cephalopods); // true (as they both are referring to the same array)

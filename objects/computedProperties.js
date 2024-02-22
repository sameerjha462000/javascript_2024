const role = "host";
const person = "Jools Holland";
const role2 = "Director";
const person2 = "James Cameron";

const team = {};

// Method 1
team[role] = person;
team[role2] = person2;

// Method 2 -- method of computed properties
const obj = { [role]: person, [role2]: person2 };

// Create a method which takes an object, a key and a value and returns us a new object with the added key value pair
// Method 1
function addProp(obj, k, v) {
  const copy = { ...obj };
  copy[k] = v;

  return copy;
}

console.log(addProp(team, "happy", ":)"));

// Method 2
function addProp2(obj, k, v) {
  return { ...obj, [k]: v };
}

console.log(addProp2(obj, "happy", ":)"));

// Method 3

const addProp3 = (obj, k, v) => ({ ...obj, [k]: v });

console.log(addProp3(team, "sad", ":("));
// WATCH ME BECOME A DEMON SOON

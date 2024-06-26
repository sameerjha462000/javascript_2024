const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

/**
 * Exercise 1 : count the total number of y and n and make an object using reduce method
 */
// METHOD 1
var results = votes.reduce((accumulator, currValue) => {
  if (accumulator[currValue]) accumulator[currValue]++;
  else accumulator[currValue] = 1;

  return accumulator;
}, {});

// METHOD 2
var results = votes.reduce((accumulator, currValue) => {
  accumulator[currValue] = (accumulator[currValue] || 0) + 1;
  return accumulator;
}, {});

console.log(results);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

// GROUP BOOKS INTO CATEGORIES
const categories = books.reduce((accumulator, currBook) => {
  // check the rating of the currBook
  let rating = Math.floor(currBook.rating);

  // check if it is the first book with that rating or not
  if (accumulator[rating] === undefined) accumulator[rating] = [];
  accumulator[rating].push(currBook);

  return accumulator;
}, {});
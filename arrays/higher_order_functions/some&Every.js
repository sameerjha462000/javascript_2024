// every and some take a boolean callback and give us a boolean result
let words = ["dog", "dig", "log", "bag", "wag"];

// To check if all the words are exactly of length 3
const all3Lets = words.every((word) => word.length === 3);

// To check if all the words end in 'g'

const allEndInG = words.every((word) => word[word.length - 1] === "g");

// some

// To check if some word starts with 'd'

const someStartWithD = words.some((word) => word[0] === "d");

// EXAMPLE USING BOOKS DATASET
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

// To check if every book is good (A good book is a book with rating > 3.5)
const allGoodBooks = books.every((book) => book.rating > 3.5);

// To check if there exists some book which has 2 authors
const has2Authors = books.some((book) => book.authors.length === 2);
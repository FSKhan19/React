const fs = require("fs");

function ReadJsonSync(param) {
  try {
    const jsonData = JSON.parse(fs.readFileSync(param.fileName, "utf-8"));
    return jsonData;
  } catch (error) {
    throw error;
  }
}

// Reading Data from file
const jsonData = ReadJsonSync({
  fileName: "D:\\Data\\FSKGit\\ReactLearning\\04 - Review JS\\staticData.json",
});

// Filter based on Id
function getBook(id) {
  return jsonData.find((d) => d.id === id);
}

const book = getBook(2);

// Object destructing

// Old way
// const id = book.id;
// const title = book.title;
// const author = book.author;
// const genres = book.genres;
// const rating = book.reviews.goodreads.rating;

//console.log(id, title, author, rating, genres);

// Object destructing
// const { id, title, author, rating, genres } = book;
// console.log(id, title, author, rating, genres); // rating undefined due to properties name not matched

//Nested Destructing
// const {
//   id,
//   title,
//   author,
//   reviews: {
//     goodreads: { rating },
//   },
//   genres,
// } = book;
// console.log(id, title, author, rating, genres);

// default value => default value will only be used if the property is undefined.
book.translations = undefined;
const translation = { "en-us": "english" };
const { id, title = "Farhan Shahid", translations = translation } = book;
console.log(id, title, translations);

// Array destructing

// Old way
// const firstName = genres[0];
// const secondName = genres[1];

// console.log(firstName, secondName);

//const [firstName, secondName] = genres;
//console.log(firstName, secondName);

const [firstName, , , , lastName] = genres; // skipping item
console.log(firstName, lastName);

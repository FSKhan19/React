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

// Search Methods

// Find will return the first matching record otherwise return undefined
const booksFind = jsonData.find(function (value, index, array) {
  /*
The item value
The item index
The array itself 
*/
  return value.id === 2;
});

// check if an element is present in an array (including NaN, unlike indexOf).
console.log(booksFind.genres.includes("fantasy"));

// returns -1 if the item is not found.
console.log(booksFind.genres.indexOf("fantasy"));

console.log(booksFind.genres.at(4));

console.log(booksFind.genres.at(-1)); //last element

console.log(booksFind.genres.join(", ")); //returns new array // immutable

// Find will return the first matching record otherwise return undefined
const booksFilter = jsonData.filter(function (value, index, array) {
  /*
    The item value
    The item index
    The array itself 
    */
  return value.id === 2;
});

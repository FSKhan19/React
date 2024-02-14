/* 
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object. 

JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.

The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
But the spread syntax expands iterables into individual elements.

Rest = Take out 
Spread = Clone

*/

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
const { genres } = book;

/* Rest Operator */

// Array Destructing with Rest Operator
const [first, second, ...restGenres] = genres; //when you are taking out some items but also need left items array as well
//console.log(first, second, restGenres);

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

//console.log(sum(1, 2, 3, 4, 5, 6, 7)); //passing arguments as literals but you have spread operator as parameter

// Define a function with two regular parameters and one rest parameter:
function myBio(firstName, lastName, ...otherInfo) {
  return [firstName, lastName, ...otherInfo];
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male")
);

// Object Destructing with Rest Operator

const { id, title, ...restOther } = book; //when you are taking out some items but also need left items array as well
//console.log(id, title, restOther);

/* 
Take Away =. Rest Operator 
---------
You Cannot Use "use strict"; inside a Function Containing a Rest Parameter
Rest operator in function must be the last parameter
The arguments object is an array-like object—not a real array
You cannot use the arguments object in an arrow function
*/

/* Spread Operator */

// Array
const genresUpdateEnd = [...genres, "Action"]; // When you want to update array with new items
//console.log(genresUpdateEnd);

const genresUpdateStart = ["Sci-Fi", ...genres]; // When you want to update array with new items
//console.log(genresUpdateStart);

function multiply(x, y, z) {
  return x * y * z;
}

const numbers = [2, 3, 4, 5, 6];
//console.log(multiply(...numbers)); // mapping literals based on order

const numbers2 = [5, 6, 2, 3, 4];
//console.log(multiply(...numbers2)); // mapping literals based on order

// Objects

bookUpdate = { ...book, isDeleted: 0 }; // will add in parent node isDeleted if not exists
//console.log(bookUpdate)

bookUpdate2 = { ...bookUpdate, isDeleted: 1 }; // isDeleted already exits so it will update/override
//console.log(bookUpdate2)

bookUpdate3 = { isDeleted: 1, ...bookUpdate };
/* While creating new objects the order of spread operator takes importance 
if you see in this example what will happens it will add first new obj 
{isDeleted: 1}
then 
{isDeleted: 1, rest of bookUpdate obj prop}
then give preference to isDeleted last value which is 0 

So, always place spread operator first then new prop then update ones
*/
//console.log(bookUpdate3);

//bookUpdate2 = { reviews: { internalReviews: { Rating: 5 } }, ...book }; // added in parent nodes
//console.log(bookUpdate2);

// You can do many things by join Destructing & Rest Or Spread Operator

/* 
Take Away = Spread Operator 
---------
The spread operator does not clone identical properties
*/

/* Shallow Copy vs. Deep Copy */

// Shallow
// const myName = {
//   fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
// };

// const bio = { ...myName };

// myName.fullName.firstName = "Tobi";

// console.log(myName); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }

// console.log(bio); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }

// Deep
const myName = {
  fullName: { firstName: "Oluwatobi", lastName: "Sofela" },
};

const bio = structuredClone(myName);

myName.fullName.firstName = "Tobi";

console.log(myName); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }

console.log(bio); // { fullName: { firstName: "Oluwatobi", lastName: "Sofela" } }

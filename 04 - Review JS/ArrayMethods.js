//#region   File Reading 
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
  fileName: "D:\\Git\\ReactLearning\\04 - Review JS\\staticData.json",
});

//#endregion


//#region Search Methods
/*
You can use either arrow function or callback functions with array extension aka functions
*/
// Find will return the first matching record otherwise return undefined
const booksFind = jsonData.find(function (value, index, array) {
  /*
The item value
The item index
The array itself 
*/
  return value.id === 2;
});

console.log(jsonData.findIndex(x=>x.id == 2));

const numbersData = [1,2,4,5,10,40,50, 100];
//will start from the end of an array and return the value of the first element that satisfies a condition
console.log(numbersData.findLast(x=>x > 40)) // give you  value
console.log(numbersData.findLastIndex(x=>x > 40)) // give you index
// check if an element is present in an array (including NaN, unlike indexOf), Return True oR False
console.log(booksFind.genres.includes("fantasy"));
// returns -1 if the item is not found.
console.log(booksFind.genres.indexOf("fantasy"));
// search based on index
console.log(booksFind.genres.at(4));
// using []
console.log(booksFind.genres[4]);
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

//#endregion

//#region Sort Functions

// Alpabetic Sort methods 
console.log(booksFind.genres);
console.log(booksFind.genres.sort());  // immutable, return new array 
console.log(booksFind.genres.reverse());  // immutable, return new array 
console.log(booksFind.genres.toSorted()); // Change Original Array
console.log(booksFind.genres.toReversed());


// Numeric Sort
/*
By default, the sort() function sorts values as strings.
Because of this, the sort() method will produce incorrect result when sorting numbers.
If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
You can fix this by providing a compare function
*/

numbersData;
console.log(numbersData.sort());
console.log(numbersData.sort(function(a, b){return a - b})); // ascending
console.log(numbersData.sort(function(a, b){return b-a})); // desc
//#endregion Sort Functions


//#region Iteration Methods
var totalVal = 0 ;
numbersData.forEach(function (value, index, array) {
  totalVal+= value;
});

console.log(totalVal);

const newNumbersData = numbersData.map(function (value, index,array) {
  if(value> 5){
    return value;
  }
  return 0;
});

newNumbersData

const newNumbersData2 = numbersData.flatMap(function (value, index,array) {
  if(value> 5){
    return value;
  }
  return 0;
});
newNumbersData2

const arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arrayOfArrays.flatMap(innerArray => innerArray))


/*
    map() is suitable for straightforward transformations where each element in the input array corresponds to one element in the output array.
    flatMap() is useful when dealing with arrays of arrays or when you want to both map and flatten in a single operation.
*/


const newNumbersData3 = numbersData.reduce(function (total, value, index, array) {
  return total + value;
}, 0);
console.log(newNumbersData3)

/*
every()
some()
*/
//#endregion

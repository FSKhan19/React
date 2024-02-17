/* 
1. An object literal is a syntax for creating objects in JavaScript by defining them directly within the code, using curly braces {}. 
2. They doesn't have constructor like we have in a class
*/

const ObjectLiteral = {
  name: "Farhan Shahid",
  print() {
    console.log(this.name);
  },
};

// client code
console.log(ObjectLiteral.name);
ObjectLiteral.print();

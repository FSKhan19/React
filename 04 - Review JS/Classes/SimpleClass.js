/* 
1. Classes follow the "strict mode" rules.
2. A class in JavaScript defines a blueprint for creating objects.

*/

class SimpleClass {
  constructor(name) {
    console.log("Called on Initialization of class");
    this.name = name || "Farhan Shahid"; // Handling falsy (0, '', null, undefined) with Short Circuiting
  }

  print() {
    console.log(this.name); // accessing data
  }
}

// Client Code
const sc = new SimpleClass(""); // class instance also called object of class
sc.print();

new SimpleClass(0).print(); //Fluent Calling

new SimpleClass(1).print();

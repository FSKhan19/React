// Simple Invocation
const printArrow = (_) => console.log(this);

function print() {
  console.log(this);
}

//printArrow(); // Undefined
//print(); // Window Obj

// Method Invocation using Object Literal
const ObjectLiteral = {
  name: "Farhan Shahid",
  count: 0,
  print() {
    console.log(this.name);
  },
  printArrow: (_) => console.log(this.name),

  printCount() {
    this.count++;
    console.log(this.count);
  },

  printCountArrow: (_) => {
    this.count++;
    console.log(this.count);
  },
};
//ObjectLiteral.print(); // Logs method invocation object
//ObjectLiteral.printArrow(); // undefined

// Method Invocation using Template (Class)

class SimpleClass {
  constructor(name) {
    this.name = name || "Farhan Shahid"; // Handling falsy (0, '', null, undefined) with Short Circuiting
    this.count = 0;
  }

  print() {
    console.log(this); // accessing data
  }

  printArrow = () => console.log(this);

  printCount() {
    this.count++;
    console.log(this.count);
  }

  printCountArrow = () => {
    this.count++;
    console.log(this.count);
  };
}

const sc = new SimpleClass("Farhan Shahid Khan");
//sc.print(); // Class Obj
//sc.printArrow(); // Class Obj

// Indirect Invocation

const data = { FirstName: "Farhan", MiddleName: "Shahid", LastName: "Khan" };

const printArrowIndirectInvocation = () => console.log(this);

function printIndirectInvocation() {
  console.log(this);
}

//printArrowIndirectInvocation.call(data);
//printIndirectInvocation.call(data);

const arrayData = ["Farhan", "Shahid", "Khan"];

//printArrowIndirectInvocation.apply(arrayData);
//printIndirectInvocation.apply(arrayData);

//sc.print.call(data); // data Context
//sc.printArrow.call(data); // Context not applied

//sc.print.apply(arrayData); // data Context
//sc.printArrow.apply(arrayData); // Context not applied

//ObjectLiteral.print.call(data); // data Context
//ObjectLiteral.printArrow.call(data); // undefined

//ObjectLiteral.print.apply(data); // data Context
//ObjectLiteral.printArrow.apply(data); // undefined

//setTimeout(sc.print, 2000); // undefined
//setTimeout(sc.printArrow, 2000); // Class Context

//setTimeout(sc.print.bind(sc), 2000);// Class Context

ObjectLiteral.printCount();
ObjectLiteral.printCountArrow();

ObjectLiteral.printCount();
ObjectLiteral.printCountArrow();

// sc.printCount();
// sc.printCountArrow();

// sc.printCount();
// sc.printCountArrow();

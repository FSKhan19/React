/* 
Before we dive in, it's important to understand a few key points:
1. JS doesn't have any access specifier. So any one can read method,properties,fields from client side.
However, you can achieve encapsulation and access control through closures and naming conventions.

2. Getter and setter functions offer a level of encapsulation and validation, though they aren't foolproof. 
   We'll demonstrate how these can be bypassed and discuss strategies for stricter access control. 
*/

class FieldDemo {
  constructor(name) {
    console.log(this); // Nothing in context
    this.name = name || "Farhan Shahid"; // name added in the context , // `_name` is accessible throughout the class instance
    console.log(this);
  }

  print() {
    console.log(this.name); // accessing data
  }
}

//const fd = new FieldDemo(0);
//fd.print();
//fd.name = null;
//fd.print(); // you can see, No Validation + what if  want to allow just read data not write ? thats where getter setter comes into play

class GetterDemo {
  constructor(name) {
    console.log(this); // Nothing in context
    this._name = name || "Farhan Shahid"; // _name added in the context
    console.log(this);
  }

  get name() {
    return this._name;
  }

  print() {
    console.log(this._name); // accessing data
  }
}

// const gd = new GetterDemo();
// gd.print();
// gd._name = "Test";
// gd.print(); // as you can see i was able to change _name bcz it was added in the context due to this

class GetterDemo2 {
  constructor(name) {
    console.log(this); // Nothing in context
    let _name = name || "Farhan Shahid"; // _name added in the context

    this.getName = function () {
      return _name;
    };

    this.print = function () {
      console.log(this._name); // accessing data
    };

    console.log(this);
  }
}

const gd2 = new GetterDemo2();
console.log(gd2._name); // This would be undefined as '_name' is not a property of the instance
console.log(gd2.getName());

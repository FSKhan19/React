class Car {
  constructor(name) {
    this.name = name;
  }
  static print() {
    return "Static Hello!!";
  }

  print() {
    return "Hello!!";
  }
}

const myCar = new Car("Ford");
console.log(myCar.print());
console.log(Car.print());

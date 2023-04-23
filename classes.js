// class are syntatical sugar

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showDetails = function () {
    console.log(this.name + " " + this.age);
  };
}

class Child extends Person {
  constructor(name) {
    super(name);
  }
}

let person1 = new Person("Sahil", 25);

person1.showDetails();

let child = new Child("Rahul");

child.showDetails(); // here age is not inherited

// while on using obj1.__proto__  = obj2 other properties were inherited
let child2 = { name: "Ramesh" };
let Person2 = {
  name: "Sahil",
  age: 28,
  showDetails: function () {
    console.log(this.name + " " + this.age);
  },
};
child2.__proto__ = Person2;
child2.showDetails();

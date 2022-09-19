class Person {
  //define private variable
  #id = 1;
  constructor(name) {
    this.name = name;
  }

  getFunc = () => {
    return this.#id;
  };
}

let user = new Person("sahil");
console.log(user.getFunc()); // give value of private variable because of getter function
console.log(user.name); // self variable
console.log(user.id); // undefined
console.log(user.#id); // error for private variable

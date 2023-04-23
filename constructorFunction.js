function construct() {
  console.log(this); // this will give global object
}

let a = construct(); // will print global object

// but if we use new keyword
function construct2(name, surname) {
  this.name = name;
  this.surname = surname;
  this.getname = function () {
    console.log(this.name + " " + this.surname);
  };
}
let b = new construct2("Sahil", "Soni"); // this will give {}

b.getname();

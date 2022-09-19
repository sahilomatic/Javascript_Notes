// call is used to borrow function from other object or use some other function

obj1 = {
  name: "Sahil",
  surname: "Soni",
  showDetails: function () {
    console.log(`my name is ${this.name} and  surname is ${this.surname}`);
  },
};

obj2 = {
  name: "Rahul",
  surname: "Duvedi",
};

// function borrowing

obj1.showDetails.call(obj2);

var showDetails2 = function (car) {
  console.log(
    `my name is ${this.name} and  surname is ${this.surname} . I drive ${car}`
  );
};

showDetails2.call(obj1, "BMW");

// Apply is also similar to call , but arguments are passed as list

showDetails2.apply(obj2, ["Merc"]);

// Bind is also used for function borrowing, but instead of executing function , it returns a function which can
// be used multiple times, similar to closures

let bindfunc = showDetails2.bind(obj2, "Merc");
bindfunc();

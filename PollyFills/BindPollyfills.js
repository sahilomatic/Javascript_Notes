let obj = {
  name: "Sahil",
  surname: "Soni",
};

let showDetails = function (city, country) {
  console.log(
    `my name is ${this.name} ${this.surname} and i live in ${city} of ${country}`
  );
};

let bindFunc = showDetails.bind(obj, "Chandigarh", "India");
bindFunc();

// in bind function we can also pass argument at later point

let bindFunc2 = showDetails.bind(obj, "Chandigarh");
bindFunc2("India");
console.log("****************");
console.log("Pollyfill of Bind");

// now let us create pollyfills of bind function, since it is function we have to modify prototype
// of a function

// Accepting any number of arguments passed to myBind
/*Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  console.log(this);
  return function () {
    func.apply(obj, [...args]);
  };
};
*/
Function.prototype.myBind = function (obj, ...args) {
  // since bind can take multiple arguments thus , we should use a spread operator

  let func = this;
  console.log(func);
  //let params = args[1];
  console.log(args);
  // here we are not able to pass arguments at time of call unless inner function is able to take arguments

  return function (...args2) {
    // first argument of bind function is object
    // apply is used instead of call, as apply take arguments in form of array
    func.apply(obj, [...args, ...args2]);
  };
};

let customBind = showDetails.myBind(obj, "Chandigarh", "India");
customBind();

// here we are not able to pass arguments at time of call unless inner function is able to take arguments
let customBind2 = showDetails.myBind(obj, "Chandigarh");
customBind2("India");

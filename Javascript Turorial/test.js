let obj = {
  name: "Jack",
};

let myFunc = function (id) {
  console.log(`${this.name}, ${id}`); // id will be undefined
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  console.log(this);
  return function () {
    func.apply(obj, [...args]);
  };
};

let newFunc = myFunc.myBind(obj, "a_random_id");
newFunc(); // Jack, a_random_id

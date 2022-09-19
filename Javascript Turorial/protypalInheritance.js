/*
Prototype is property of an object, 
1)array and every other data structure inherits properties of object 

2) Object is super object
3) Array is hetrogenous in nature in Javascript


arr.__proto__
[constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]
arr.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
arr.__proto__.__proto__.__proto__
null
let b = {'a':1}
undefined
b.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
b.__proto__.__proto__
null

*/

//Protypal Inheritance

obj1 = {
  name: "Sahil",
  age: 25,
  func: function () {
    console.log(`my name is ${this.name} and age is ${this.age}`);
  },
};

obj2 = {
  name: "Rahul", // name is over ridden
};

obj2.__proto__ = obj1;

obj2.func(); // name is over ridden and rest of the properties are inherited

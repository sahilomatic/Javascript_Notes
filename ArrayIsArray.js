// to find type of any item use typeof operator

var num = 4;
var str = "abc";
var obj = {
  a: 1,
};
var arr = [1, 2, 3];

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof obj); // object

console.log(typeof arr); // should be array but gives object, because everything is object

console.log(Array.isArray(arr)); // gives true if array else false

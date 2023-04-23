let obj = {
  a: 1,
  b: 2,
};

let a = JSON.parse(JSON.stringify(obj)); // true deep copy
let b = { ...obj }; // shallow copy for nested elem, deep copy for 1st level
let c = Object.assign({}, obj); // shallow copy for nested elem, deep copy for 1st level

console.log(c);

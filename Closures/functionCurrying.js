// a technique where arguments are passed for inner function

function f1(a) {
  return function f2(b) {
    return function f3(c) {
      console.log(a + b + c);
    };
  };
}

console.log(f1(5)(5)); // here (5) is argument for different function ()->() right parenthesis is inner function of left function
f1(5)(5)(5);
let func = (a) => (b) => (c) => (d) => (e, f) => a + b + c + d + e + f;

console.log(func(5)(5)(5)(5)(5, 5));
let f2 = (a) => (b) => a;
console.log(f2(3)(2)); // will return 3

console.log(f2(3)); // will return anonymus function

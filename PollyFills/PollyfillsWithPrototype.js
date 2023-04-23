/* every browser has an engine to run JS code , for example chrome works on V8 engine,
2) if we use object.prototype then it will give us all the functions supported by that object
3) some time a function might not be supported by other browsers , so at that time we can wite our custom
function using prototype

*/

// map pollyfill with Array Prototype

Array.prototype.myMapFunction = function (cb) {
  // this will access calling array
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(cb(this[i]));
  }

  return newArray;
};
function sqaure(x) {
  console.log(x);
  return x * x;
}
A1 = [1, 2, 3, 4];
A2 = A1.myMapFunction(sqaure);
console.log(A2);

console.log("here");

// pollyfill filter function

Array.prototype.myFilterFunction = function (cb) {
  // this will access calling array
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};
function isEven(x) {
  if (x % 2 == 0) {
    return true;
  }
}
A3 = [1, 3, 4, 5, 16];
A4 = A3.myFilterFunction(isEven);
console.log(A4);

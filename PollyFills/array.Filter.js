// ideal filter return elements which obey a condition

let a = [1, 2, 3, 4, 5, 5, 6, 7];
// pollyfill of array

/*
following code is not working
Array.prototype.myFilterPollyfill = (callBackFunction) => {
  let output = [];

  // here this will refer the calling object which is array here
  console.log(this);

  this.forEach((elem, index) => {
    if (callBackFunction(elem)) {
      output.push(elem);
    }
  });

  return output;
};

*/

Array.filter = (callBackFunction) => {
  let output = [];

  // here this will refer the calling object which is array here
  console.log(this);

  this.forEach((elem, index) => {
    if (callBackFunction(elem)) {
      output.push(elem);
    }
  });

  return output;
};
function checkEven(x) {
  if (x % 2 == 0) {
    return true;
  }

  return false;
}
//console.log([1, 2, 3, 4, 5, 5, 6, 7].myFilterPollyfill);
console.log([1, 2, 3, 4, 5, 5, 6, 7].filter(checkEven));

let a = [1, 2, 3, 4];

function square(x) {
  return x * x;
}
function myMapPollyfill(arr, callBackFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBackFunction(a[i]));
  }

  return result;
}

console.log(myMapPollyfill(a, square));

function isEven(x) {
  if (x % 2 != 0) {
    return true;
  }
}
function myFilterPollyfill(arr, callBackFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBackFunction(a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

console.log(myFilterPollyfill(a, isEven));

function myReducePollyfill(arr) {
  let accumlator = 0;
  for (let i = 0; i < arr.length; i++) {
    accumlator = accumlator + a[i];
  }
  return accumlator;
}

console.log(myReducePollyfill(a));

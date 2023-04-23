/*
A reduce fucntion takes two thing , a callback function and initial value
Edge cases :
1) if array is not defined, throw error
2) if array is empty and initial value is given , return initial value
3) if array is empty and initial value is also not given , throw error
4) it accumalates all the result for each index of array and return accumlated value
5) if initial Value then accumalator starts from initialValue else array[0]



*/

function myReduce(callBack, initialValue) {
  if (!this) {
    throw new Error("Array is not defined");
  }

  let array = this; //  to assign array value from this
  let accumalator = 0;
  let index = 0;
  if (array.length < 1) {
    if (!initialValue) {
      throw new Error("Initial Value is not provided");
    } else {
      return initialValue;
    }
  }

  if (initialValue) {
    accumalator = initialValue;
  } else {
    accumalator = array[index];
    index = index + 1;
  }

  // callBack(prevValue, currentValue, index, array)
  while (index < array.length) {
    accumalator = callBack(accumalator, array[index], index, array);
    index = index + 1;
  }
  return accumalator;
}

function callBackFunc(prevValue, currentValue, index, array) {
  return prevValue + currentValue;
}

Array.prototype.myReduce = myReduce;

let a = [1, 2, 3, 4, 5];
console.log(a.myReduce(callBackFunc, 0));

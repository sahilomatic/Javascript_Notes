const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i, arr[i]); // arr.length for all iterations
  }, 3000);
}

/* 
Reason it will not work because 
1) SetTimeout will go to nodeAPI/ browser API, while for loop will keep on executing in in callStack
2) so by the time cosole.log will go to calbback Queue and then execute, var i will already be in equal to arr.length

*/

// use following for correcting it
for (var i = 0; i < arr.length; i++) {
  delay(i);
}

function delay(i) {
  setTimeout(function () {
    console.log(i, arr[i]); // arr.length for all iterations
  }, 3000);
}
// if let is used it will work because of block scope, let also use kindoff same approach
for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    //console.log(i, arr[i]); // arr.length for all iterations
  }, 3000);
}

// if var is used it will not work because it has gloabl scope and keep iterating but with let it has block scope

//https://javascript.plainenglish.io/

// other options

// using IIFE

for (let i = 0; i < arr.length; i++) {
  (function solve() {
    setTimeout(function () {
      console.log(i, arr[i]); // arr.length for all iterations
    }, 3000);
  })();
}

// if we declare let oustide a function then it will get global scope and we will get index to beyond length

const arr2 = [10, 12, 15, 21];
let j = 0;

for (; j < arr2.length; j++) {
  setTimeout(function () {
    console.log(j, arr2[j]); // arr.length for all iterations
  }, 3000);
}

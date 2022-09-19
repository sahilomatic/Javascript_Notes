const arr2 = [10, 12, 15, 21];
let j = 0;

for (; j < arr2.length; j++) {
  
  setTimeout(function () {
    console.log(j, arr2[j]); // arr.length for all iterations
  }, 3000);
}

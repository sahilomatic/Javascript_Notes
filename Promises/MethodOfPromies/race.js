var p1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

var p2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});

var p3 = new Promise((resolve, reject) => {
  reject("Promise 3");
});

var result = Promise.race([p1, p2, p3]); // this will return result of first Promise it encountered weather it
// reject or resolve

console.log(
  result
    .then((promisArray) => {
      console.log(promisArray);
    })
    .catch((err) => {
      console.log(err); // since it has a reject statement only 1 output would be printed
    })
);

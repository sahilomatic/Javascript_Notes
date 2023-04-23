var p1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

var p2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});

var p3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});

var result = Promise.all([p1, p2, p3]); // this will return array of Promise reult

console.log(
  result
    .then((promisArray) => {
      console.log(promisArray);
    })
    .catch((err) => {
      console.log(err); // since it has a reject statement only 1 output would be printed
    })
    .finally(() => {
      // this run irresepecting of resolve or reject .
      // it is used to hide unhide loader or garbage collection
    })
);

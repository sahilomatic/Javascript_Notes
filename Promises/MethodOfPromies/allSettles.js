var p1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

var p2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});

var p3 = new Promise((resolve, reject) => {
  reject("Promise 3");
});

var result = Promise.allSettled([p1, p2, p3]); // this will return  Promise i

console.log(
  result.then((p) => {
    console.log(p); // status weather its is fulffileed or rejected
  })
);

/*
output
  [{ status: 'fulfilled', value: 'Promise 1' },
  { status: 'fulfilled', value: 'Promise 2' },
  { status: 'rejected', reason: 'Promise 3' }
]

*/

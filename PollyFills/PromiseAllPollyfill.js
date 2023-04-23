/* 
Pollifill of PromiseAll
1) consumes array of promises
2) resolve all promises, if any error then reject that error
3) else return array of boolean values or result
*/

function someTask(name, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}

function PromiseAllPollyfill(taskArray) {
  let output = [];
  return new Promise((resolve, reject) => {
    taskArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index == taskArray.length - 1) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

PromiseAllPollyfill([
  someTask("sahil", 2000),
  someTask("rahul", 2000),
  someTask("kumar", 1000),
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

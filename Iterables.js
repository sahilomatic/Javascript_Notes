obj = {};

obj[Symbol.iterator] = function () {
  let i = 0;
  done = false;

  return {
    next() {
      i = i + 1;
      if (i > 10) {
        done = true;
      }
      return { value: i, done: done };
    },
  };
};

for (let x of obj) {
  console.log(x);
}

let obj2 = obj[Symbol.iterator]();

console.log(obj2.next());
console.log(obj2.next());

while (true) {
  let res = obj2.next();
  if (res.done) {
    break;
  } else {
    console.log(res.value);
  }
}

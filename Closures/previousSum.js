function prevSum() {
  let prev = 0;
  return function inner(arg = 0) {
    prev += arg;
    return prev;
  };
}

let func = prevSum();
console.log(func(1));
console.log(func(2));
console.log(func(3));
console.log(func(4));
console.log(func(5));
console.log(func(6));

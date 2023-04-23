function curryFn() {
  let prev_sum = 0;

  function inner(arg) {
    prev_sum = prev_sum + arg;
    return prev_sum;
  }

  return inner;
}

let sum = curryFn();

console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));

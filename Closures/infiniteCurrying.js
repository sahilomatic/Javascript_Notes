function outer(...args1) {
  return function inner(...args2) {
    if (args2.length == 0) {
      return args1.reduce((prev, current) => {
        return prev + current;
      }, 0);
    } else {
      args1 = args1.concat(args2);
      console.log(args1);
    }
  };
}

let func = outer(1, 2, 3);

console.log(func(4));
console.log(func(5));
console.log(func(6));
console.log(func());

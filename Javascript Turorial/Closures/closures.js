function parent() {
  let a = 5;
  function inner() {
    return a;
  }

  return inner;
}

let func = parent();
console.log(func);
console.log(func());
/* inner function has access to lexical scope , even after running parent function*/

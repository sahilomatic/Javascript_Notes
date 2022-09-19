// Function Currying using Bind method
function add(a, b) {
  return a + b;
}

let b = add.bind(this, 2);
//console.log(b(5));
//console.log(b(10));

function add2(a, b) {
  console.log(a + b);
}

let c = add2.bind(this, 2);
//c(5);
//c(10);

// Function Currying using closures

function parent(a) {
  function inner(b) {
    console.log(a + b);
  }
  return inner;
}

let func = parent(2);

func(5);
func(10);

// Search about Polyfill for JSON.stringify

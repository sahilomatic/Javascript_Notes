// rather than storing millions of values in array we can create them on the go using generators
// generators are iterators.

function* gen() {
  console.log("here");
  yield 10;
}

gen();

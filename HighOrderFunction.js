// high order functions are functions , which take function as arguemment and apply certain process, solve it and return final result
// example of HOF is map, filter, reduce

let a = [1, 2, 3, 4];

// map function
let mapResult = a.map((x) => {
  return x * x;
});
console.log(mapResult);
// filter function
let filterResult = a.filter((x) => {
  if (x % 2 == 0) {
    return x;
  }
});
console.log(filterResult);

// reduce function
let reduceResult = a.reduce((accumlator, x) => {
  accumlator = accumlator + x;
  return accumlator;
}, 0);

console.log(reduceResult);

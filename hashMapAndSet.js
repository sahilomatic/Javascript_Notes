// differenc in map and object is that map mantains order of insertion, key can also be object while not possible in objects
// for each can be used
// size property is not mantained

let s = new Set();

s.add("a");
s.add("b");
s.add("v");

console.log(s);

console.log(s.has(4));
console.log(s.has(3));
console.log(s.entries());

let m = new Map([["a", 2]]);
m["b"] = 3;
m[{ a: 4 }] = 5;

console.log(s.size);

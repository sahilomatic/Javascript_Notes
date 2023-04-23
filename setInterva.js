// setTimeout and setInterval returns an id other then executing code

setTimeout(() => {
  console.log("setTimeOut");
}, 1000);

console.log("2nd statement");

// here 2nd statement should work before the first as setTimeout and setInterval are node/browser functions
// and thus don't go directly to execution stack. and goes to callcakc execution que and then handles by task
// scheduler when execution stack gets over

let counter = 0;
let id = setInterval(() => {
  counter++;
  if (counter > 3) {
    clearInterval(id);
  }
  console.log("setInterval");
}, 3000);



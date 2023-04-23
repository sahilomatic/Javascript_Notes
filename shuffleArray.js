/* Given array, shuffle it */

let a = [1, 2, 3, 4];

function shuffleArray(a) {
  for (let i = 0; i < a.length; i++) {
    let val = Math.random();
    let j = Math.floor(val * i);
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
}

console.log(shuffleArray(a));
console.log(shuffleArray(a));
console.log(shuffleArray(a));
console.log(shuffleArray(a));
console.log(shuffleArray(a));

str = "hello world";

function removeDuplicates(str) {
  let a = str.split("");
  let s = new Set(a);
  let ans = "";
  s.forEach((x) => {
    ans += x;
  });
  console.log(ans);
}

removeDuplicates2(str);

function removeDuplicates2(str) {
  let s = new Set([]);
  let index = 0;
  let ans = "";
  while (index < str.length) {
    if (!s.has(str[index])) {
      s.add(str[index]);
      ans += str[index];
    }
    index += 1;
  }

  console.log(ans);
}

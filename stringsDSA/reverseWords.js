let str = "hello word in world";

function reverseWord(str) {
  let arr = str.split(" ");

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    i += 1;
    j -= 1;
  }

  console.log(arr.join(" "));
}

reverseWord(str);

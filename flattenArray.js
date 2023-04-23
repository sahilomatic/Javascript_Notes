let arg = [1, [1, [2, 3], 4, 5], 6, 7];

function flattenArray(arg, res = []) {
  for (x of arg) {
    console.log(x);
    if (Array.isArray(x)) {
      res = res.concat(flattenArray(x));
    } else {
      res.push(x);
    }
  }

  return res;
}

function flattenArray2(arr) {
  return arr.reduce((prevValue, cuurentValue) => {
    if (Array.isArray(cuurentValue)) {
      prevValue = prevValue.concat(flattenArray2(cuurentValue));
    } else {
      prevValue.push(cuurentValue);
    }

    return prevValue;
  }, []);
}
console.log(flattenArray2(arg));

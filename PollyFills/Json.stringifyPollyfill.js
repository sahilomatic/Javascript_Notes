function stringifyPollyfill(obj) {
  let final = ``;
  // We get the last key of this object
  const lastKey = Object.keys(obj).pop();
  for (key in obj) {
    final = final + `"${key}": `;
    if (Array.isArray(obj[key])) {
      final = final + `[${obj[key]}]`;
    } else if (typeof obj[key] === "object") {
      final = final + `${stringifyPollyfill(obj[key])}`;
    } else if (typeof obj[key] === "string") {
      final = final + `"${obj[key]}"`;
    } else {
      final = final + `${obj[key]}`;
    }
    if (lastKey != key) {
      final = final + " ,";
    }
  }

  return "{" + final + "}";
}
let obj = {
  a: { b: 2 },
  c: "abc",
  d: [1, 2, 3],
};
console.log(stringifyPollyfill(obj));

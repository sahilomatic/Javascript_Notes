var obj = {
  name: "Sahil",
  age: 28,
  address: {
    city: "chd",
    house: {
      floor: 1,
      number: 222,
    },
    pincode: 160021,
  },
};

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propname = parent ? parent + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propname, res);
    } else {
      res[propname] = obj[key];
    }
  }

  return res;
}

console.log(flattenObj(obj));

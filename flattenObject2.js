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

  arr: [1, 2, 3],
};

function flattenObject(obj, parent_name = "", res = {}) {
  for (x in obj) {
    let pName = parent_name ? parent_name + "." : "";

    if (typeof obj[x] == "object") {
      flattenObject(obj[x], pName + x, res);
    } else {
      // here condition is not required for array because typeof array is also object and keys are index value
      /*else if (Array.isArray(obj[x])) {
      for (let i = 0; i < x.length; i++) {
        res[pName + x + "." + i] = x[i];
      }
    } */
      res[pName + x] = obj[x];
    }
  }

  return res;
}

console.log(flattenObject(obj));

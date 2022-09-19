// we are using  strict mode

"use strict";

console.log(this); // node this will give {} empty object in node and window/global in windows

function a() {
  console.log(this); // return undefined in both node and windows
}

a();

var obj = {
  a: [1, 2, 3],
  b: function () {
    console.log(this); // this will return object in both node and windows
  },

  c: function () {
    function d() {
      console.log(this); // this will return undefined in node and undefined in winodws
    }

    d();
  },
};

console.log(obj.c());

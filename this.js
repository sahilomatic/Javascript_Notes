// we are using non strict mode

console.log(this); // node this will give {} empty object and global in windows

function a() {
  console.log(this); // return global object in both node and windows
}

a();

var obj = {
  a: [1, 2, 3],
  b: function () {
    console.log(this); // this will return object in both node and window
  },

  c: function () {
    function d() {
      console.log(this); // this will return global object in both node and window
    }

    d();
  },
};

console.log(obj.c());

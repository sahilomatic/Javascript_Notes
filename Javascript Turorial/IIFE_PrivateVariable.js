// immediately invoked functions
// these are also used as it helps to make variable private

// it has two parts group function inside() and then () to call the function
let obj = (function func() {
  let gst = 5; // scope in func bloack

  function getCost(val) {
    console.log("total cost post tax", val + gst);
  }

  function setGST(val) {
    gst = val;
  }

  return { getCostFunc: getCost, setGSTFunc: setGST };
})();

obj.getCostFunc(10);
obj.setGSTFunc(6);

obj.getCostFunc(10);

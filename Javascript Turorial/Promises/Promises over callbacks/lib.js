var updateAccount = function (product, cb) {
  // setTimeout is not Javascript code , but node API code i.e. it is provided by the engine or browser
  setTimeout(() => {
    console.log(product + " Purchased");

    // in event external library is not made correctly , it will give security issues
    cb();
    cb();
    cb();
    // like here callback is called multiple time,
  }, 2000);
};

var promiseToBuy = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

module.exports = {
  updateAccount: updateAccount,
  promiseToBuy: promiseToBuy,
};

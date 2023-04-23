const externalLib = require("./lib");

let amount = 2000;
let price = 200;

function productPurchased() {
  amount = amount - price;
  console.log(` remaining amount is ${amount}`);
}

externalLib.updateAccount("ball", productPurchased);

let promisObject = externalLib.promiseToBuy("TV").then(productPurchased);

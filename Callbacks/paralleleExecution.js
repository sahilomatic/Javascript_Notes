const fileReader = require("fs"); // node/ environement function

var fileList = [
  "./Callbacks/f1.txt",
  "./Callbacks/f2.txt",
  "./Callbacks/f3.txt",
];

for (let i = 0; i < fileList.length; i++) {
  fileReader.readFile(fileList[i], cb); // will execute asynchronously and callback is pushed to callbacks queue
}

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("data " + data);
  }
}

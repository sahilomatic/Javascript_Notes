const fileReader = require("fs"); // node/ environement function

var fileList = [
  "./Callbacks/f1.txt",
  "./Callbacks/f2.txt",
  "./Callbacks/f3.txt",
];

fileReader.readFile(fileList[0], cb1);

function cb1(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("data " + data);
  }
  fileReader.readFile(fileList[1], cb2);
  function cb2(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("data " + data);
    }

    fileReader.readFile(fileList[2], cb3);
    function cb3(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log("data " + data);
      }
    }
  }
}

// here code will run sequentially

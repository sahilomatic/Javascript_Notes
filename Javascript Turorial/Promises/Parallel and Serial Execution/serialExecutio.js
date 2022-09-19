const fileReader = require("fs").promises;

var fileList = [
  "./Promises/Parallel and Serial Execution/f1.txt",
  "./Promises/Parallel and Serial Execution/f2.txt",
  "./Promises/Parallel and Serial Execution/f3.txt",
];
let filePromise = fileReader.readFile(fileList[0]);

for (let i = 1; i < fileList.length; i++) {
  filePromise = filePromise.then((data) => {
    console.log("data " + data);

    return fileReader.readFile(fileList[i]);
  });
}

filePromise.then((data) => {
  console.log("data " + data);
});

// here a new file is only read after prevos then function is executed, as it is part of callback in then

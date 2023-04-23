var fileReader = require("fs").promises;
var fileList = [
  "./Promises/Parallel and Serial Execution/f1.txt",
  "./Promises/Parallel and Serial Execution/f2.txt",
  "./Promises/Parallel and Serial Execution/f3.txt",
];

// parallel reading

for (file of fileList) {
  let filePromise = fileReader.readFile(file);
  filePromise.then((data) => {
    console.log("data", data);
  });
}

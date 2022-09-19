const fileReader = require("fs").promises;

var fileList = [
  "./Promises/Parallel and Serial Execution/f1.txt",
  "./Promises/Parallel and Serial Execution/f2.txt",
  "./Promises/Parallel and Serial Execution/f3.txt",
];

for (i = 0; i < fileList.length; i++) {
  let file = fileReader.readFile(fileList[i]); // this will go to node api and not in execution stack
  file.then((data) => {
    // as data gets processed, then function would be psuhed to execution que
    console.log("data " + data);
  });
}

// event loop will keep checking if execution stack is empty and then push function to execution stack from quue

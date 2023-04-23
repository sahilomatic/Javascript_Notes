/*

this will have 3 cases
1) when delimiter is at 0index, ignore it and continue for rest of string
2) when in between, call inner recursively for str.substring(delimiterIndex+delimeter.length)
3) if substr is empty return
4) when '' , return Array.from(str)
5) when ' ' , then call internal function recursively



*/

function stringSplit(string, delimeter) {
  let output = [];
  if (delimeter == "") {
    return Array.from(string);
  }

  function inner(subStr) {
    //console.log(subStr);
    //console.log(output, index);
    if (subStr.length == 0) {
      return;
    }

    let delimeterIndex = subStr.indexOf(delimeter);
    //console.log(delimeterIndex);

    if (delimeterIndex == 0) {
      // delimiter at 1st index , edge case
      inner(subStr.substring(delimeterIndex + delimeter.length));
    } else if (delimeterIndex > 0) {
      // means delimeter found

      output.push(subStr.substring(0, delimeterIndex));
      inner(subStr.substring(delimeterIndex + delimeter.length));
    } else {
      // if delimeter not found

      output.push(subStr);
    }
  }

  inner(string, 0);
  return output;
}

console.log(stringSplit("the harry has a fox the harry will kill for", ""));

console.log(stringSplit("the harry has a fox the harry will kill for", " "));

console.log(
  stringSplit("the harry has a fox the harry will kill for the", "the")
);

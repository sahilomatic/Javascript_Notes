window.onload = function () {
  const button = document.getElementById("mySelect");
  console.log(button);
  button.addEventListener(
    "click",
    throtling(function () {
      console.log("button clicked");
    }, 2000)
  );

  const input = document.getElementById("debounce");
  console.log(input);
  input.addEventListener(
    "input",
    debouncing(function () {
      console.log("input clicked");
    }, 2000)
  );
};

function debouncing(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
async function getData() {
  console.log("get data");
  let data = await fetchData();
  console.log(data);
}

function fetchData() {
  let data = "abc";
  console.log("in Promise");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

// throtling is done to limit time consuming request, first request is made and then wait for delay time to execute next request

function throtling(func, delay) {
  let prev = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - prev > delay) {
      func();
      // prev stored for next call
      prev = now;
    }
  };
}

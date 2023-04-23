function createSetTimeOut() {
  let idTimer = 0;
  let idMap = {};

  function setTimeOutPollyfill(callBackFunc, delay, ...args) {
    let id = idTimer++;
    idMap[id] = true;
    let startTime = Date.now();

    function triggerFunction() {
      if (!idMap[id]) {
        return;
      }
      if (Date.now() >= startTime + delay) {
        callBackFunc.apply(this, args);
      } else {
        requestIdleCallback(triggerFunction);
      }
    }
    requestIdleCallback(triggerFunction);
    return id;
  }

  function clearTimeOutPollyfill(id) {
    delete idMap[id];
  }

  return { setTimeOutPollyfill, clearTimeOutPollyfill };
}

function callBackFunc(name) {
  console.log("my name is", name);
}

const { setTimeOutPollyfill, clearTimeOutPollyfill } = createSetTimeOut();

console.log("start");
setTimeOutPollyfill(callBackFunc, 20, "Ramesh");
setTimeOutPollyfill(callBackFunc, 1, "Sahil");

console.log("end");

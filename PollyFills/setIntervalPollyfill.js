function createSetInterVal() {
  let timerID = 1;
  let idMap = {};

  function setIntervPollyfill(callback, delay) {
    let id = timerID++;
    idMap[id] = true;
    function repeat() {
      setTimeout(() => {
        callback();
        if (idMap[id]) {
          repeat();
        }
      }, delay);
    }

    repeat();

    return id;
  }

  function clearInterValPollyfill(id) {
    delete idMap[id];
  }

  return { setIntervPollyfill, clearInterValPollyfill };
}

const { setIntervPollyfill, clearInterValPollyfill } = createSetInterVal();

function callBackFunc() {
  console.log("callbackFunc");
}

setIntervPollyfill(callBackFunc, 100);

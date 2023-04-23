//throttle  it is  step where first call is made immediately and rest of the calls are only alowed after a cool down period

function throttle(func, delay) {
  let prev = 0;
  return function (...args) {
    let now = Date.now();
    if (now - prev > delay) {
      prev = now;
      func.call(this, args);
    }
  };
}

//debouncing

function debouncing(cb, delay) {
  let index = null;

  return function (...args) {
    // if previous index exist, delete previous call, do it no matter what
    if (index) {
      clearInterval(index);
    }

    index = setTimeout(() => {
      cb.apply(this, args);
    }, delay);
  };
}

//throttle  it is  step where first call is made immediately and rest of the calls are only alowed after a cool down period

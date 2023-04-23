function debounce(func, delay, option = { leading: false, trailing: false }) {
  let timer = null;

  return function (...args) {
    let invoked = false;

    // IF LEADING DEBOUNCE

    if (!invoked && option.leading) {
      func.call(this, args);
      invoked = true;
    }

    // no matter what

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (option.trailing && !invoked) func.call(this, args);

      timer = null;
    }, delay);
  };
}

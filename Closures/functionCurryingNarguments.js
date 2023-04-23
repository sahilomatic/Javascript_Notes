// function currying with na values

var N = 5;

function sumn(...args) {
  // if args has n elements, then return sum
  if (args.length === N) {
    console.log("here1");
    return args.reduce((pre, current) => {
      return pre + current;
    }, 0);
  } else {
    inner = (...args2) => {
      args = args.concat(args2);
      if (args.length === N) {
        console.log("here2");
        return args.reduce((pre, current) => {
          return pre + current;
        }, 0);
      } else {
        return inner;
      }
    };

    return inner;
  }
}

console.log(sumn(1)(2, 3)(4)(5));

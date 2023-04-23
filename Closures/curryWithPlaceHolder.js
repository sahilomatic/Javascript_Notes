/*

Implement Currying with PlaceHolder
const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'





*/

const joined = (a, b, c, d) => {
  console.log(`${a}_${b}_${c}`);
};

function curry(func) {
  console.log("curry");

  return curried(...args){

    let expectedArgs = func.legth;
    let checkIfPlaceholder = args.every(elem=> elem!= curry.placeholder);
    


  }

}

curry.placeholder = Symbol();



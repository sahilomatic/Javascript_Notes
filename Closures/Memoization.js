/*
Build Memoization function , which executes the function for 1st time, else return cache value if same 
arg are passed



*/


function memoize(fn){
    let cache = {}

    return (...args)=>{

        let key = JSON.stringify(args);
        if(key in cache){
            console.log('from cache');
            return cache[key];
        }

        else{
            cache[key] = fn(args);
            return cache[key];

        }

    }
}


function factorial(val){
    if(val<=1){
        return 1
    }

    return val*factorial(val-1);


}


const solve = memoize(factorial);


console.log(solve(5));
console.log(solve(6));

console.log(solve(5));


function addition(args){
    console.log(args);
   
    return args.reduce((prev,current)=>{return prev + current},0)
}

const solve2 = memoize(addition);
console.log(solve2(1,2,3));
console.log(solve2(1,2,3,4));
console.log(solve2(1,2,3));
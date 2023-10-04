export {};

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(x:number,y:number): number {
    if (!Number.isInteger(x) || !Number.isInteger(y)) throw Error(`Error: ${!Number.isInteger(x) ? "x is not a int: "+ x : !Number.isInteger(y) ? "y is not a int: "+ y : ""}`);
    
    let result:number = x;
    for (let i=x+1 ;i<=y;++i){
        result += i;
    }
    return result;
};

console.log(sumAll(1, 4)); // Expected output: 10

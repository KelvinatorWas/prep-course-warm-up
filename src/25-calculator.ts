export {};

function add(fNum:number, sNum:number) { return fNum + sNum; }

function subtract(fNum:number, sNum:number) { return fNum - sNum; }

function sum(arr:number[]) {
    return arr.reduce((pNum:number, cNum:number) => add(pNum, cNum));
}

function multiply(arr:number[]) {
    return arr.reduce((pNum:number, cNum:number) => pNum*cNum);
}

function power(fNum:number, sNum:number) { return fNum**sNum; }


console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8

export {};

/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

// first solution
const min = (array:number[]) => {
    if (array.length == 0) {
        throw new Error("Array doesn't contain anything!");
    }
    return array.sort((a:number, b:number) => a - b)[0];
};
const max = (array:number[]) => {
    if (array.length == 0) {
        throw new Error("Array doesn't contain anything!");
    }
    return array.sort((a:number, b:number) => b - a)[0];
};

// second solution
const min2 = (array:number[]) => {
    if (array.length == 0) {
        throw new Error("Array doesn't contain anything!");
    }
    return array.reduce((pNum:number, cNum:number) => { return pNum < cNum ? pNum : cNum});
};
const max2 = (array:number[]) => {
    return array.reduce((pNum:number, cNum:number) => { return pNum > cNum ? pNum : cNum});
};

// third solution
const min3 = (array:number[]) => {
    if (array.length == 0) {
        throw new Error("Array doesn't contain anything!");
    }
    
    let minVal = array[0];

    for (var i = 0; i <= array.length; i++) {
        if (array[i] < minVal ) { minVal = array[i]}
    }

    return minVal;

};
const max3 = (array:number[]) => {
    if (array.length == 0) {
        throw new Error("Array doesn't contain anything!");
    }
    
    let maxVal = array[0];

    for (var i = 0; i <= array.length; i++) {
        if (array[i] > maxVal ) { maxVal = array[i]}
    }

    return maxVal;
};

console.log("=========First=========")
console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9

console.log("=========Second========")
console.log(min2([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min2([9, -3, 6])); // Expected output: -3
console.log(max2([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max2([9, -3, 6])); // Expected output: 9


console.log("=========Third=========")
console.log(min3([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min3([9, -3, 6])); // Expected output: -3
console.log(max3([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max3([9, -3, 6])); // Expected output: 9

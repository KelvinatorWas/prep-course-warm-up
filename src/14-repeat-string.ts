export {};

const repeatString = (ch:string, len:number) => {
    return ch.repeat(len);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'

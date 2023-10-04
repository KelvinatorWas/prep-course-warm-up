export {};

function truncateString(word:string, cutSize:number) {
    return word.slice(0, cutSize);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE

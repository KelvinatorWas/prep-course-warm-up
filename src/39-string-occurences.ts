export {};

const count = (str:string, word:string) => {
    return str.toLowerCase().split(" ").filter((strWord) => strWord == word).length;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1

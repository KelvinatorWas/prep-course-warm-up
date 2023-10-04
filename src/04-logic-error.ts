export {};

function wordtrim(word:string):string {
	return word.trim()
}

function trimWord(word:string) {
  return wordtrim(word);
}

const result = trimWord("  CODELEX ");
console.log(result); // Expected output: "CODELEX"

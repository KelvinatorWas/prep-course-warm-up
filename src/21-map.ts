export {};

function tidyUpString(str:string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str:string[]) {
	if (str.length == 0) { return [];}

	return str.map((str) => {
		const tidyString = tidyUpString(str);
		return tidyString.charAt(0).toUpperCase() + tidyString.slice(1);
	});
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

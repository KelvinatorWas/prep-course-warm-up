export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
 function protectEmail(email: string) {
    const atIndex: number = email.indexOf("@");
    const emailEnd: string = email.slice(atIndex);
    let protectedPart: string = ""
    
    if (atIndex > 5){
        protectedPart = email.slice(0,3) + "...";
    } 
    else if (atIndex > 3) {
        protectedPart = email.slice(0,2) + "...";
    }
    else {
        protectedPart = "...";
    }

    return `${protectedPart}${emailEnd}`;
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com
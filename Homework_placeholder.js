/*
Write a function named as isPasswordValid() which takes a 
string password as an argument and returns true if the password 
is valid or returns false otherwise when invoked.
NOTE: A VALID PASSWORD:
•should have length of 8 to 16 (both inclusive).
•should have at least 1 digit, 1 uppercase, 1 lowercase and 1 
special char.
•should NOT have any space.
Examples:
isPasswordValid("")  -> false
isPasswordValid("abcd")  -> false
isPasswordValid("abcd1234")  -> false
isPasswordValid("Abcd1234")  -> false
isPasswordValid("Chicago12345US!#$%")  -> false
isPasswordValid("Abcd1234$")  -> true
isPasswordValid("Chicago123$")  -> true
isPasswordValid("Test1234#")  -> true
*/



const isPasswordValid = (pass) => {
   if(pass.includes(' ')) return false;
   if(pass.length < 8 || pass.length > 16) return false

   let hasUppercase = false;
   let hasLowercase = false;
   let hasDigit = false;
   let hasSpecial = false;

   for(char of pass){
    if(char >= 'A' && char <= "Z") hasUppercase = true;
    else if(char >= 'a' && char <= "z") hasLowercase = true;
    else if(char >= '0' && char <= "9") hasDigit = true;
    else hasSpecial = true;
   }



return (hasUppercase && hasLowercase && hasDigit && hasSpecial)
   
}
console.log(isPasswordValid(""));  // false
console.log(isPasswordValid("abcd"));  // false
console.log(isPasswordValid("abcd1234"));  // false
console.log(isPasswordValid("Abcd1234"));  // false
console.log(isPasswordValid("Chicago12345US!#$%"));  // false
console.log(isPasswordValid("Abcd1234$"));  // true
console.log(isPasswordValid("Chicago123$"));  // true
console.log(isPasswordValid("Test1234#"));  // true













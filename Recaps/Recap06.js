// Task 15
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

const isPasswordValid = pass => {
    // if(pass.length < 8 || pass.length > 16 || pass.includes(' ')) return false;


    // if(pass.split('').filter(ele => ele >= 'A' && ele <= 'Z').length === 0) return false
    // if(pass.split('').filter(ele => ele >= 'a' && ele <= 'z').length === 0) return false
    // if(pass.split('').filter(ele => ele >= '0' && ele <= '9').length === 0) return false
    // if(pass.split('').filter(ele => (ele < 'a' || ele > 'z') && (ele < 'A' || ele > 'Z') && (ele < '0' || ele > '9')).length === 0) return false

    // return true


    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;

    for(let char of pass){
        if(char >= 'a' && char <= 'z') hasLowercase = true;
        else if(char >= 'A' && char <= 'Z') hasUppercase = true;
        else if(char >= '0' && char <= '9') hasDigit = true;
        else hasSpecial = true;
    }

   return hasUppercase && hasLowercase && hasDigit && hasSpecial

}


console.log(isPasswordValid(""));  // false
console.log(isPasswordValid("abcd"));  // false
console.log(isPasswordValid("abcd1234"));  // false
console.log(isPasswordValid("Abcd1234"));  // false
console.log(isPasswordValid("Chicago12345US!#$%"));  // false
console.log(isPasswordValid("Abcd1234$"));  // true
console.log(isPasswordValid("Chicago123$"));  // true
console.log(isPasswordValid("Test1234#"));  // true


// Task 14
/*
Write a function named as isEmailValid() which takes a string 
email as an argument and returns true if the email is valid or 
returns false otherwise when invoked.
NOTE: A VALID EMAIL:
•should NOT have any space.
•should not have more than one “@” character.
•should be in the given format 
<2+chars>@<2+chars>.<2+chars> meaning
•There should be at least characters before @ character.
•There should be at least 2 characters between @ and . 
Characters.
•There should be at least 2 characters after the . character.
Examples:
isEmailValid("")  -> false
isEmailValid("@gmail.com")  -> false
isEmailValid("johndoe@yahoo")  -> false
isEmailValid("johndoe@.com")  -> false
isEmailValid("a@outlook.com")  -> false
isEmailValid("johndoe@a.com")  -> false
isEmailValid("johndoe@@gmail.com")  -> false
isEmailValid("johndoe@gmail.com")  -> true
*/

const isEmailValid = email => {
    if(email.includes(' ')) return false
    if(email.split('@').length !==  2) return false

    
     let beforeAT = email.split('@')[0]
     let afterAtBeforeDot = email.split('@')[1].split('.')[0]
     let afterDot = email.split('@')[1].split('.')[1]


     if(!afterDot) return false;

     return beforeAT.length >= 2 && afterAtBeforeDot.length >= 2 && afterDot.length >= 2


}

console.log(isEmailValid("@gmail.com"))//false
console.log(isEmailValid("johndoe@yahoo"))//false
console.log(isEmailValid("johndoe@.com"))//false
console.log(isEmailValid("johndoe@a.com"))//false
console.log(isEmailValid("johndoe@@gmail.com"))//false
console.log(isEmailValid("johndoe@gmail.com"))//true


// Task 13
/*
Requirement:
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

const findClosestTo10 = arr => {
    let closestTo10 = Number.MAX_VALUE;
    let closestDiff = Number.MAX_VALUE;

    for(let ele of arr){
        if(ele === 10) continue;
        let currDifference = Math.abs(ele - 10)

        if(currDifference < closestDiff || ((currDifference === closestDiff) && ele < closestTo10)){
            closestTo10 = ele;
            closestDiff = currDifference;
        }
    }

    return closestTo10
}

console.log(findClosestTo10([10, -13, 15, 70, 5, 57]));  // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));  // 8
console.log(findClosestTo10([0, -1, -2]));  // 0





const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');



/*
Requirement:
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.

Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

const factorial = (n) => n === 0 || n === 1 ? 1 : n * factorial(n-1)


// const factorial = (num) => {
//     let total = 1;

//     for(let i = 2; i <= num; i++){
//         total *= i;
//     }
//     return total;
// }

//fac(5) -> 5 * factorial(5-1) -> 120
//fac(4) -> 4 * factorial(4-1) -> 24
//fac(3) -> 3 * factorial(3-1) -> 6
//fac(2) -> 2 * factorial(2-1) -> 2
//fac(1) -> 1

console.log(factorial(0))



const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2 || num === 3 || num === 5) return true;
    if(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) return false;

    let d = 7;
    while(d < num){
        if(num % d === 0) return false;
        d**=2;
    }

    return true;

}


//sieveOfEratosthenes

function sieveOfEratosthenes(n) {
    // Create an array of true values for marking primes
    let primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false; // 0 and 1 are not primes

    // Start marking from the first prime number 2
    for (let p = 2; p * p <= n; p++) {
        if (primes[p]) {
            // Mark all multiples of p as false (not prime)
            for (let i = p * p; i <= n; i += p) {
                primes[i] = false;
            }
        }
    }

    // Collecting all prime numbers
    let primeNumbers = [];
    for (let p = 2; p <= n; p++) {
        if (primes[p]) {
            primeNumbers.push(p);
        }
    }

    return primeNumbers;
}

// Example usage
let n = 50;
console.log(sieveOfEratosthenes(n));  // This will print all prime numbers up to 50

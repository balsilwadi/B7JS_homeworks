let num = 6;

console.log(num === 5)

if(num === 5) console.log("this number is 5")
else console.log("this number is not 5")


let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

console.log(num1, num2, num3)
let average = (50 + 50 + 51) / 3;
console.log(average)
console.log(average >= 50 ? true : false);


//Task 10
/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.

NOTE: Return empty string if the given string does not 
have 2 or more words.

Examples:
swapFirstLastWord("Hello World")  -> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/


//"I like JavaScript".split(' ') -> ['I', 'like', 'JavaScript']

function swapFirstLastWord(str){
    str = str.trim();

    if(str.includes(' ')){
        let firstWord = str.slice(0, str.indexOf(' '))
        let lastWord = str.slice(str.lastIndexOf(' ') + 1)
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1)
        return lastWord + middle + firstWord
    }
    
    else return ""
}



console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("    "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello  "));


//Task 8
/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(str) {
    //str = str.toLowerCase();
    //return str.startsWith('a') || str.startsWith('e') || str.startsWith('i') || str.startsWith('u') || str.startsWith('o')

    return 'aeiouAEIOU'.includes(str[0])
}

console.log(startVowel("Hello"));// false
console.log(startVowel("Apple")); // true
console.log(startVowel("orange"));// true
console.log(startVowel("")); //false
console.log(startVowel("    "));//false
console.log(startVowel("123") );//false



//Task 9
/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(str) {//JavaScript
    str = str.trim()

    if(str.length >= 8){
        let first4 = str.slice(0, 4)//Java
        let middle = str.slice(4, -4)//Sc
        let last4 = str.slice(-4)//ript
        return last4 + middle + first4
    }
    return ""

    
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));

/* Middle
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked.
NOTE: If the given word is empty, then return the empty string back.
Examples:
middle("Tech") -> "ec"
middle("Global") -> "ob"
middle("abcde") -> "c"
middle("1") -> "1"
middle("abc") -> "b"
middle("1234") -> "23  */


function middle(str) {
    if(str.length % 2 === 0) return str[str.length / 2 - 1] + str[str.length / 2];
    else if (str.length % 2 !== 0) return (str[(str.length / 2) - 0.5]);
    else return (str);

    // if(str === "") return ""
    // return str.length % 2 === 0 ? str[str.length / 2 - 1] + str[str.length / 2] : (str[(str.length / 2) - 0.5 ]) 
}
console.log(middle(""));
console.log(middle("Global"));
console.log(middle("abcde"));
console.log(middle("1"));
console.log(middle("abc"));
console.log(middle("1234"));


/* Calculate the absolute difference between max and min of 3 random numbers.
Write a program that generates 3 random numbers between 1 and 10 (both inclusive).
Calculate the greatest and the smallest numbers and print their absolute difference.
Examples:
3, 5, 2 -> 3
7, 3, 1 -> 6
5, 5, 5 -> 0
1, 10, 9 -> 9
10, 1, 2 -> 9 
*/

let max = Math.max(7, 3, 1);
let min = Math.min(7, 3, 1);
let abs = max - min;
console.log(abs);


/*
Write a function named as rectangleArea()
which calculates the area of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Area = x * y 

Examples: 
rectangleArea(5, 4) -> 20 
rectangleArea(3, 7) -> 21 
rectangleArea(6, 10) -> 60
*/

function rectangleArea(x, y){
    return x * y;
}

console.log(rectangleArea(6, 10))

/*
function named as rectanglePerimeter() which calculates the perimeter of a rectangle when invoked. 
NOTE: Assume the sides of the rectangle are x and y. 
Conversion Formula: Perimeter = 2 * (x + y) 
Examples: rectanglePerimeter(5, 4) -> 18 
rectanglePerimeter(3, 7) -> 20 
rectanglePerimeter(6, 10) -> 32
*/

function rectanglePerimeter(x, y){
    return 2 * (x + y) ;
}

console.log(rectanglePerimeter(6,10))
/*
Requirement:
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!

Expected Output: 
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49

*/

for(let i = 0; i <= 7; i++){
    console.log(`The square of ${i} is = ${Math.pow(i,2)}`)
}


/*
Requirement:
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/



console.log('\n------------------1st solution------------------\n');
function firstDuplicate(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr.includes(arr[i], i + 1)) return arr[i];
    }
    return -1;
}

console.log('\n------------------2nd solution------------------\n');

function firstDuplicate2(arr){
    for(let i = 0; i <= arr.length - 2; i++){
        for(let j = i + 1; j <= arr.length - 1; j++ ){
            if(arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}
console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]))
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ]))
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]))
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]))
console.log(firstDuplicate([ 1, 2, 3]))
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ]))


/*
Requirement:
Write a function named as getDuplicates() which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]

*/

function getDuplicates(arr){
    let dup = []
    let container = []

    for(let ele of arr){
        if(!container.includes(ele)) container.push(ele)
        else if(!dup.includes(ele)) dup.push(ele)
    }
    return dup;
}


function getDuplicates(arr){
    let dup = []
    for(let i = 0; i<=arr.length - 2; i++){

        if(arr.includes(arr[i], i+1) && !dup.includes(arr[i])) dup.push(arr[i])
    }
    return dup;
}



console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]))
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]))

/*
Requirement:
Write a function named as reverseStringWords() which takes a string as an argument and returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""

*/


function reverseStringWords(str){
    let words = str.trim().split(/\s+/);

    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split('').reverse().join('')
    }

    return words.join(' ')
}

console.log(reverseStringWords("   Hello     World   "))
console.log(reverseStringWords("I    like     JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))



/*
Requirement:
Write a function named as getEvens() which takes 2 number arguments and returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]

*/

function getEvens(num1, num2){
    let evenNumbers = [];
    let min = Math.min(num1,num2)
    let max = Math.max(num1,num2)

    for(let i = min; i <= max; i++){
        if(i % 2 === 0) evenNumbers.push(i)
    }

    return evenNumbers;
}


console.log(getEvens(2, 7))
console.log(getEvens(17, 5))
console.log(getEvens(4, 4))
console.log(getEvens(3, 3))

/*
Requirement:
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]

*/

function getMultipleOf5 (num1, num2){
    let multipleOf5 = [];
    if(num1 >= num2){
        for(let i = num1; i >= num2; i--){
            if(i % 5 === 0) multipleOf5.push(i)
        }
    }
    else{
        for(let i = num1; i <= num2; i++){
            if(i % 5 === 0) multipleOf5.push(i)
        }
    }

    return multipleOf5;
}



function getMultipleOf5 (num1, num2){
    let multipleOf5 = [];

    for(let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++){
        if(i % 5 === 0) multipleOf5.push(i)
    }

    return num1 > num2 ? multipleOf5.reverse() : multipleOf5;
}


console.log(getMultipleOf5(3, 17))
console.log(getMultipleOf5(23, 5))
console.log(getMultipleOf5(5, 5))
console.log(getMultipleOf5(2, 4))


/*
Requirement:
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"

*/

function fizzBuzz (num1, num2){
    let arr = []

    for(let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++){
        if(i % 15 === 0) arr.push('FizzBuzz')
        else if(i % 3 === 0) arr.push('Fizz')
        else if(i % 5 === 0) arr.push('Buzz')
        else arr.push(i)
    }

    return arr.join(' | ');
}


const fizzBuzz = (num1, num2) => {
    const arr = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        let str = '';
        if (i % 3 === 0) str += 'Fizz';
        if (i % 5 === 0) str += 'Buzz';
        if (str === '') str = i.toString();
        arr.push(str);
    }
    return (arr.join(' | '));
}

console.log(fizzBuzz(13, 18));
console.log(fizzBuzz(12, 5));
console.log(fizzBuzz(5, 5));
console.log(fizzBuzz(9, 6));
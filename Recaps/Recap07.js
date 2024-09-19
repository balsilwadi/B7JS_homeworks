// Task 13
/*
Requirement:
Write a method named mostRepeated() takes an array argument and 
returns the most counted element from the array.
NOTE: Assume that you will not be given empty array and the count of one 
element will always be more than the others.
Examples:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])  -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])  -> "pen"
mostRepeated([10])  -> 10
mostRepeated(["TechGlobal"])  -> "TechGlobal"
*/

const mostRepeated = arr => {
    let count = {};
    let mostRepeated;
    let mostRepeatedCount = 0;

    for(let ele of arr){
        if(count[ele]) count[ele]++
        else count[ele] = 1

        if(count[ele] > mostRepeatedCount){
            mostRepeatedCount = count[ele]
            mostRepeated = ele;
        }
    }
    return mostRepeated
}

const mostRepeated2 = arr => {
    let count = arr.reduce((obj, ele) => (obj[ele] ? obj[ele] += 1 : obj[ele] = 1, obj), {});
    let mostRepeated;
    let mostRepeatedCount = 0;

 for(let ele of arr){
        if(count[ele] > mostRepeatedCount){
            mostRepeatedCount = count[ele]
            mostRepeated = ele;
        }
    }
    return mostRepeated
}


const mostRepeated3 = arr => {
    return arr.sort((a, b) => arr.filter(v => v === a).length - arr.filter(v => v === b).length).pop();
  }

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));  // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]));  // "pen"
console.log(mostRepeated([10]));  // 10
console.log(mostRepeated(["TechGlobal"]));  // "TechGlobal"


// Task 11
/*
Requirement:
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.
NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second max 
number.
NOTE: Be careful when there is multiple max numbers.
Examples:
secondMax([7, 4, 4, 4, 23, 23, 23])  -> 7
secondMax([3, 4, 5, 6])  -> 5
secondMax([10])  -> 10
*/


const secondMax = arr => {
    const sortedArr = arr.sort((a, b) => b - a)

    for(let ele of sortedArr){
        if(ele !== sortedArr[0]) return ele
    }

    return sortedArr[0]
}

const secondMax2 = arr =>  arr.sort((a, b) => b - a).filter(ele => ele !== Math.max(...arr))[0] || arr[0]

  //WITHOUT USING SORT

  const secondMax3 = arr => {
    let max = arr[0];
    let secondMax;
  
    for(num of arr){
      if(num > max){
        secondMax = max;
        max = num;
      }else {
        if(num > secondMax && num !== max)
        secondMax = num;
      }
    }
  
    return secondMax || max
  }

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]))
console.log(secondMax([3, 4, 5, 6]))
console.log(secondMax([10,10]))


 // Task 10
/*
Requirement:
Write a method named isDateFormatValid() that takes a 
string as an argument and returns true if the given date is 
valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as 
<2digits>/<2digits>/<4digits>
Examples:
isDateFormatValid("")  -> false
isDateFormatValid("15/30/2020")  -> false
isDateFormatValid("10-30-2020 ")  -> false
isDateFormatValid("10.30.2020")  -> false
isDateFormatValid("5/30/2020")  -> false
isDateFormatValid("05/30/2020 ")  -> true
isDateFormatValid("10/2/2020")  -> false
isDateFormatValid("10/02/2020 ")  -> true
*/

const isDateFormatValid = date => {
    date = date.trim()
    const dateAsArr = date.split('/');
    let month = dateAsArr[0]
    let day = dateAsArr[1]
    let year = dateAsArr[2]


    if(month.length !== 2 || day.length !== 2 || year.length !== 4) return false
        
    if(date.split('').filter(ele => ele < '0' || ele > '9').join('') !== '//') return false;

    let maxDays;

    
    let isLeapYear;

    if(Number(year) % 4 === 0) {
        if(Number(year) % 100 === 0){
            if(Number(year) % 400 === 0) isLeapYear = true
            else isLeapYear = false;
        }else isLeapYear = true
    }else isLeapYear = false;

    if(["01","03","05","07","08","10","12"].includes(month)) maxDays = 31
    else if(["04","06","09","11"].includes(month)) maxDays = 30
    else if(isLeapYear) maxDays = 29
    else maxDays = 28

    if(Number(month) < 1 || Number(month) > 12) return false;

    if(Number(day) < 1 || Number(day) > maxDays) return false;

    if(Number(year) < 1) return false

    return true
} 

console.log(isDateFormatValid(""));  // false
console.log(isDateFormatValid("15/30/2020"));  // false
console.log(isDateFormatValid("10-30-2020"));  // false
console.log(isDateFormatValid("10.30.2020"));  // false
console.log(isDateFormatValid("5/30/2020"));  // false
console.log(isDateFormatValid("05/30/2020"));  // true
console.log(isDateFormatValid("10/2/2020"));  // false
console.log(isDateFormatValid("02/29/2020"));  // true


// Task 8
/*
Requirement:
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/
const countPrime = (arr) => {

    return arr.filter(num => {
      if(num < 2) return false;
      if(num === 2) return true;
      if(num % 2 === 0) return false
  
      for(let i = 3; i < num; i+=2){
        if(num % i === 0) return false
      }
      return true;
    }).length;
  }
  
  console.log(countPrime([-10, -3, 0, 1]))
  console.log(countPrime([7, 4, 11, 23, 17]))
  console.log(countPrime([41, 53, 19, 47, 67]))


  // Task 9
/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/
const removeDuplicates = (arr) => {
    let result = [];
  
    arr.forEach(i => {
      if(!result.includes(i)) result.push(i)
    })
  
    return result;
  }

  
  const removeDuplicates2 = arr => [...new Set(arr)]; 
  console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));  // [10, 20, 35, 60, 70]



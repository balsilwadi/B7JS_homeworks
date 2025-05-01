/*
Requirement:
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

const findSumNumbers = str => {
    let total = 0; 
    let num = '';

    for(let char of str){
        if(char >= '0' && char <= '9') num += char
        else if(char === '-'){
            if(num === '') num += char
            else if(num === '-') continue;
            else{
                total += Number(num)
                num = '-'
            }
        }else {
            total += Number(num)
            num = ''
        }
    }
    if(num && num !== '-') total += Number(num)
    return total;
}

// const findSumNumbers = str => {
//     let arrOfNumbers = str.split(/\D+/)

//     return arrOfNumbers.reduce((total, ele) => ele ? total + Number(ele) : total,0)

// }

console.log(findSumNumbers("-5-5"));            
console.log(findSumNumbers("a1b4c  6#"));       
console.log(findSumNumbers("ab110c045d"));      
console.log(findSumNumbers("525"));             
console.log(findSumNumbers("3 for 10 dollars"));


/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

const countOccurrencesOfCharacters = str => {
    if(str === '') return '';

    let result = '';
    let currChar = str[0]
    let currCount = 1;

    for(let i = 1; i < str.length; i++){
        if(str[i] === currChar) currCount++;
        else{
            result += currCount + currChar
            currCount = 1
            currChar = str[i]
        }
    }

    result += currCount + currChar
    return result
}


console.log(countOccurrencesOfCharacters(""));        
console.log(countOccurrencesOfCharacters("abc"));     
console.log(countOccurrencesOfCharacters("abbcca"));  
console.log(countOccurrencesOfCharacters("aaAAa"));   
console.log(countOccurrencesOfCharacters("www")); 


/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument 
and returns the n series of Fibonacci numbers as an array.  
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3)  -> [0, 1, 1]
fibonacciSeries1(5)  -> [0, 1, 1, 2, 3]
fibonacciSeries1(7)  -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8)  -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1)  -> [0]
fibonacciSeries1(2)  -> [0, 1]
*/

const fibonacciSeries1 = num => {
    if(num === 1) return [0];
    if(num === 2) return [0, 1]

    let result = [0,1]

    for(let i = 2; i < num; i++){
        result.push(result[i-2] + result[i-1])
    }
    return result[result]
}

console.log(fibonacciSeries1(3));  
console.log(fibonacciSeries1(5)); 
console.log(fibonacciSeries1(7));  
console.log(fibonacciSeries1(8)); 
console.log(fibonacciSeries1(1)); 
console.log(fibonacciSeries1(2)); 


/*
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument 
and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2)  -> 1
fibonacciSeries2(4)  -> 2
fibonacciSeries2(8)  -> 13
fibonacciSeries2(9)  -> 21
fibonacciSeries2(1)  -> 0
*/

const fibonacciSeries2 = num => {
    if(num === 1) return 0;
    if(num === 2) return 1

    let result = [0,1]

    for(let i = 2; i < num; i++){
        result.push(result[i-2] + result[i-1])
    }
    return result[result.length-1]
}


//fibonacciSeries2(5) = fibonacciSeries2(4) + fibonacciSeries2(3) -> 2 + 1 = 3
//fibonacciSeries2(4) = fibonacciSeries2(3) + fibonacciSeries2(2) -> 1 + 1 = 2
//fibonacciSeries2(3) = 1
//fibonacciSeries2(2) = 1

const fibonacciSeries2Rec = num => {
return num === 1 ? 0 : num === 2 || num === 3 ? 1: fibonacciSeries2(num-1) + fibonacciSeries2(num-2)
}



console.log(fibonacciSeries2(5));  
console.log(fibonacciSeries2(4)); 
console.log(fibonacciSeries2(8)); 
console.log(fibonacciSeries2(9)); 
console.log(fibonacciSeries2(1)); 

/*
Requirement:
Write a function named findUniques() which takes two array of number 
arguments and returns the array which has only the unique values from both 
given arrays.
NOTE: If both arrays are empty, then return an empty array. 
NOTE: If one of the array is empty, then return unique values from the other 
array.
Examples:
findUniques([], [])  -> []
findUniques([], [1, 2, 3, 2])  -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5])  -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9])  -> []
findUniques([-1, -2], [1, 2])  -> [-1, -2, 1, 2]
*/

const findUniques = (arr1,arr2) => {
    const concatArr = arr1.concat(arr2)
    const filteredArr = concatArr.filter(ele => !(arr1.includes(ele) && arr2.includes(ele)))
    const set = new Set(filteredArr)

    return [...set]
}

console.log(findUniques([], []));             
console.log(findUniques([], [1, 2, 3, 2]));   
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); 
console.log(findUniques([8, 9], [9, 8, 9])); 
console.log(findUniques([-1, -2], [1, 2]));  

/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return 
false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243....
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1)  -> true
isPowerOf3(2)  -> false
isPowerOf3(3)  -> true
isPowerOf3(27)  -> true
isPowerOf3(100)  -> false
isPowerOf3(81)  -> true
isPowerOf3(9)  -> true
*/

// const isPowerOf3 = num => {
//     for(let i = num; i >= 1; i /= 3){
//         if(i === 1) return true
//     }
//     return false
// }


// const isPowerOf3 = num => {

//     while(num % 3 === 0){
//         num /= 3;
//     }
//     return num === 1
// }


const isPowerOf3 = num => num === 1 ? true : num % 3 !== 0 ? false : isPowerOf3(num/3)


console.log(isPowerOf3(1));     
console.log(isPowerOf3(2));     
console.log(isPowerOf3(3));     
console.log(isPowerOf3(27));    
console.log(isPowerOf3(100));   
console.log(isPowerOf3(81));    
console.log(isPowerOf3(9));
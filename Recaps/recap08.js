/*

Requirement:
Write a function named categorizeCharacters() which takes a string word as 
argument and return an array as letters at index of 0, digits at index of 1 and 
specials at index of 2. 
Examples:
categorizeCharacters("1234")  -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%")  -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%")  -> [ 'abc', '123', '$%%' ]
*/

const categorizeCharacters = str => {
    return str.split('').reduce((cat, ele) => {
        if(ele.toLowerCase() >= 'a' && ele.toLowerCase() <= 'z') cat[0] += ele;
        else if(ele >= '0' && ele <= '9') cat[1] += ele
        else if(ele !== ' ') cat[2] += ele

        return cat;

    }, ['','',''])
}

console.log(categorizeCharacters("1234"));          
console.log(categorizeCharacters("ab c12 3$#% "));  
console.log(categorizeCharacters("12ab$%3c%")); 


/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4])  ->  [1, 2, 6, 24]
arrFactorial([0, 5])  -> [1,120]
arrFactorial([5 , 0, 6])  -> [120, 1, 720]
arrFactorial([])  -> []
*/

// const arrFactorial = arr => {
//     return arr.map(ele => {
//             let factorial = 1;
//             for(let i = 2; i <= ele; i++){
//                 factorial *= i
//             }
//             return factorial
//     })
// }

const arrFactorial = arr => arr.map(ele => [...Array(ele).keys()].reduce((factorial, num) => (num + 1) * factorial, 1))




console.log(arrFactorial([1, 2, 3, 4])); 
console.log(arrFactorial([0, 5]));       
console.log(arrFactorial([5, 0, 6]));    
console.log(arrFactorial([]));


/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string.  
Examples:
sumOfDigits("Javascript")  -> 0
sumOfDigits("John’s age is 29")  -> 11
sumOfDigits("$125.0")  -> 8
sumOfDigits("")  -> 0
*/

//const sumOfDigits = str => str.split('').filter(ele => ele >= '0' && ele <= '9').reduce((sum, num) => sum + Number(num), 0)


const sumOfDigits = str => {
    let sum = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === '-' && (str[i+1] >= '0' && str[i+1] <= '9')){
            sum -= Number(str[i+1])
            i += 1;
        }else if(str[i] >= '0' && str[i] <= '9') sum += Number(str[i])
    }

    return sum;
} 

console.log(sumOfDigits("Javascript"));     
console.log(sumOfDigits("John's age is 29")); 
console.log(sumOfDigits("$1-a-25.0-"));         
console.log(sumOfDigits(""));

/*
Requirement:
Write a function named middleInt() which takes three number arguments and 
return the middle number.  
Examples:
middleInt(1, 2, 2)  -> 2
middleInt(5, 5, 8)  -> 5
middleInt(5, 3, 5)  -> 5
middleInt(1, 1, 1)  -> 1
middleInt(-1, 25, 10)  -> 10
*/


//const middleInt = (n1, n2, n3) => [n1, n2, n3].sort((a,b) => a-b)[1];

const middleInt = (n1, n2, n3) => {
    if(n1 >= n2 && n1 <= n3) return n1;
    else if(n2 >= n1 && n2 <= n3) return n2;
    return n3;
}
    
console.log(middleInt(1, 2, 2));
console.log(middleInt(5, 5, 8));
console.log(middleInt(5, 3, 5));
console.log(middleInt(1, 1, 1));
console.log(middleInt(-1, 25, 10));

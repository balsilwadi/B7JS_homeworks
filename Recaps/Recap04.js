//contains vowel
let str = "apple";

str = str.toLowerCase()
console.log(str.includes('a') || str.includes('e') || str.includes('i') || str.includes('u') || str.includes('o'))


//contains vowel without using includes
function myIncludes (word, letter) {
    for(let i = 0; i < word.length; i++){
        let currentletter = word[i]
        if(letter === currentletter) return true;
    }

    return false
}

console.log(myIncludes(str, "a")||myIncludes(str, "e")||myIncludes(str, "i")||myIncludes(str, "o")||myIncludes(str, "u"))


//Task 1
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/

for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i)
}


for(let i = 2; i <= 100; i += 2){
    console.log(i)
}

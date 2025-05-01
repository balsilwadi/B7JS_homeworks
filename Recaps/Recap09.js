/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/

function removeStringSpecialsDigits(string) {
    let a = string.split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char === ' ');
    return a.join('');
}

// const removeStringSpecialsDigits = (str) => {
//     return [...str].filter((char) => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char === ' ').join('');
//  }

// const removeStringSpecialsDigits = (str) => str.split('').filter(i => (i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z' ) || i === ' ').join('')

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));
console.log(removeStringSpecialsDigits("Cypress"));
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*

Requirement:
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", "tool"]
*/

// const removeArraySpecialsDigits = arr => {
//     for(let i = 0; i < arr.length; i++){
//         let a = arr[i].split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char === ' ');
//         arr[i] =  a.join('');
//     }
//     return arr;
// }

// const removeArraySpecialsDigits = arr => arr.map(ele => ele.split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z' || char === ' ').join(''))

// "Javascript"
const removeArraySpecialsDigits = (array) => {
    return array.map(i => i.replace(/[^a-zA-Z\s]+/g, ''))      
};


console.log(removeArraySpecialsDigits(["123Javascript/ "]))

/*
Requirement:
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

const getCommons = (arr1, arr2) => {
    arr1 = arr1.filter(ele => arr2.includes(ele))

    let result = [];

    for(let ele of arr1){
        if(!result.includes(ele)) result.push(ele)
    }

    return result
}

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"]));
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]));
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"]));


/*
Requirement:
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/

const noXInVariables = arr => {
    return arr.map(ele => {
        if(typeof ele === 'string') return ele.split('').filter(x => x.toLowerCase() !== 'x').join('');
        return ele;
    }).filter(ele => ele || ele === 0)
}



console.log(noXInVariables(["abc", 123, "#$%"]))
console.log(noXInVariables(["xyz", 123, "#$%"]))
console.log(noXInVariables(["x", 123, "#$%"]))
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"]))


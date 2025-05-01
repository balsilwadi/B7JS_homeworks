/* Task 7
 Write a function named splitString() which takes a string and a number arguments and returns the string back split by the given number.
Note: Return empty string if the string shorter than splitting number or the string length is not divisible by the given number.
Examples:
splitString("JavaScript", 5)  -> "JavaS cript"
splitString("JavaScript", 2)  -> "Ja va Sc ri pt"
splitString("Java", 2)  -> "Ja va"
splitString("Automation", 3)  -> ""
splitString("Hello", 6)  -> ""
splitString("12", 1)  -> "1 2"
*/

const splitString1 = (str, num) => {

    if(str.length % num !== 0) return ''

    let splitStr = ''
    while(str.length > 0){
        splitStr += str.slice(0, num) + ' '
        str = str.slice(num)
    }
    return splitStr.trim()
}

const splitString2 = (str, num) => {

    if(str.length % num !== 0) return ''

    let splitStr = ''
    for(let i = 0; i < str.length; i += num){
        splitStr += str.slice(i, i+num) + ' '
    }
    return splitStr.trim()
}
console.log(splitString('JavaScript', 5));
console.log(splitString('JavaScript', 2));
console.log(splitString('Java', 2));
console.log(splitString('Automation', 3));
console.log(splitString('Hello', 6));
console.log(splitString('12', 1));
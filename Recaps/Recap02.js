console.log(("hello" !== "world" && "apple" + "pie" === "applepie") || (5 + 5 !== "10" && 7 % 2 === 0)) //true

//void
function sayHello() {
    console.log("hello")
}

//return
function returnHello(){
    console.log("log")
    return 'hello'
}


//returnHello() = 'hello'

//sayHello() = console.log("hello")


// sayHello()
// console.log("hello")


console.log(returnHello())


//finding the area if a rectaingle

//return type
function areaOfRectangle(width, height){
    let area = width * height
    return area;
}

console.log("The area of the rectaingle is = " + areaOfRectangle(5,5))



function areaOfRectangleVoid(width, height){
    console.log('the area of a rectaingle is = ' + (width * height))
}

areaOfRectangleVoid(5,5)

let str = "hello";

console.log(str.charAt(0))





function getRandomNumber(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min; // 
}

console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(8, 6));
console.log(getRandomNumber(8, 6));
console.log(getRandomNumber(8, 6));



/*
Write 2 functions named as rectangleArea() and rectanglePerimeter() 
which calculate the area and perimeter of a rectangle when invoked.
*/

console.log("name")
console.log("email")


function nameEmail(){
    console.log("name")
    console.log("email")
}



// Immediately Invoked Function Expression
(function () {
    console.log('Hello World');
})();



/*
Write a function named as longer() which takes two string words as arguments and 
returns the string that has more characters when invoked.

NOTE: If both of the words have the same length, then return the first string.

Examples:
longer("Tech", "Global")	-> "Global"
longer("Hello", "Hi")		-> "Hello"
longer("Hello", "World")	-> "Hello"
*/

function longer (str1, str2){
    if(str1.length >= str2.length){
        return str1
    }else{
        return str2
    }
}

function long(str1, str2){
    if (str1.length >= str2.length) return str1;
    else return str2;
}


console.log(longer("Tech", "Global"))
console.log(longer("Hello", "Hi"))
console.log(longer("Hello", "World"))


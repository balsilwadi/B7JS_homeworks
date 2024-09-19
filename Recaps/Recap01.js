//Math.floor(Math.random()* range) + startNumber


console.log(Math.floor(Math.random() * 50) + 51) 

// generate a random number from 111 to 126 both included

console.log(Math.floor(Math.random() * 16) + 111) 


let random = Math.floor(Math.random() * (126 - 111 + 1) + 111);
console.log(random);


console.log(Math.round(.4))





/*Task11:
Requirement
-Write a program that stores below information with proper data types and output all variables with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7
​
Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is Blue
The favorite number is 7
*/

let favBook = "Harry Potter";
let favColor = "Blue";
let favNumber = 7;

//Bit Recomended: console.log('The favorite book is ' + favBook + '\nThe favorite color is ' + favColor + ' \nThe favorite number is ' + favNumber)

console.log(
`The favorite book is ${favBook} 
The favorite color is ${favColor} 
The favorite number is ${favNumber}`
)



console.log('\n------------------TASK02------------------\n');

console.log(`\tJavaScript is a high-level programming language primarily used to \nbuild web applications. It is not limited to the web; it can also be used \nfor the backend development with technologies like Node.js. \n\n\tIt is open source and has a huge community support, which means \nthere are plenty of resources and support available for learning. It \nuses a syntax like other programming languages and easy to learn.`);
console.log(
    `    JavaScript is a high-level programming language primarily used to 
build web applications. It is not limited to the web; it can also be used 
for the backend development with technologies like Node.js.

    It is open source and has a huge community support, which means 
there are plenty of resources and support available for learning. It 
uses a syntax like other programming languages and easy to learn.`
);


/*Task4:
Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points

Test data:
3 7 2 1 8
Expected result:
59
*/
//Math.floor(Math.random()* range) + startNumber

let range = 10;
let startNumber = 1;

let rand1 = Math.floor(Math.random()* range) + startNumber;
let rand2 = Math.floor(Math.random()* range) + startNumber;
let rand3 = Math.floor(Math.random()* range) + startNumber;
let rand4 = Math.floor(Math.random()* range) + startNumber;
let rand5 = Math.floor(Math.random()* range) + startNumber;

console.log(rand1,rand2,rand3,rand4,rand5)

let points = 0;//0 50 90 96 114 122

points += rand1 * 5;
points += rand2 * 4;
points += rand3 * 3;
points += rand4 * 2;
points += rand5 * 1;

console.log(points)


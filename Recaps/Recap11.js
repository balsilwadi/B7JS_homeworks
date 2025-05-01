/* Task 1
Write a function named calculateTotalPrice1() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of 
the given items based on the price list below.
1 Apple is $2.00
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Examples:
calculateTotalPrice1({ apple: 3, mango: 1 })  -> 10.99
calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })  -> 19.12
calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })  -> 0
calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango:1 })  -> 12.24
*/

const calculateTotalPrice1 = (items) => {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0;
    for(let item in items){
        total += items[item] * prices[item]
    }
    

    return total
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 }));
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 }));
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 }));
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 }));

/* Task 2
Write a function named calculateTotalPrice2() which takes an object of some shopping items with their quantities as key-value pairs and returns the total price of the given items based on the price list below.
1 Apple is $2.00
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
Note: There will be some discounts as below .
There will be %50 discount for every second Apple
There will be 1 free Mango if customer gets 3. So, fourth one is free.
Examples:
calculateTotalPrice2({ Apple: 3, Mango: 5 })  -> 24.96
calculateTotalPrice2({ Apple: 4, Mango: 8, Orange: 3 })  -> 45.81
calculateTotalPrice2({ Apple: 0, Pineapple: 0, Orange: 0 })  -> 0
calculateTotalPrice2({ Apple: 4, Pineapple: 1, Orange: 1, Mango:3 })  -> 29.51
 */

const calculateTotalPrice2 = (items) => {
    const prices = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0;
    for(let item in items){
        let noSale =  items[item] * prices[item];
        let salePrice = 0;

        if(item === 'apple') salePrice = (Math.floor(items[item] / 2)) * (prices[item] / 2);
        else if(item === 'mango') salePrice = (Math.floor(items[item] / 4)) * (prices[item]);


        total += noSale - salePrice
    }
    

    return total === 0 ? total: total.toFixed(2)
}

console.log(calculateTotalPrice2({ apple: 3, mango: 5 })); 
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 })); 
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 })); 
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango: 3 }));


/* Task 5
Write a function named reverseNumber() which takes a number argument and returns it back reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371)  -> 173
reverseNumber(123)  -> 321
reverseNumber(12)  -> 21
reverseNumber(0)  -> 0
reverseNumber(111)  -> 111
*/

const reverseNumber = num => {
    let isNeg = num < 0;
    num = Math.abs(num)

    let reversed = 0;

    for(let i = num; i > 0; i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10)
    }

    if(isNeg) return -reversed
    return reversed;
}

console.log(reverseNumber(371));
console.log(reverseNumber(1230));
console.log(reverseNumber(12));
console.log(reverseNumber(0));
console.log(reverseNumber(111));
console.log(reverseNumber(-123));


/* Task 4
Write a function named isArmstrong() which takes a number argument and returns true if given number is armstrong, return false otherwise.
Note: An armstrong number is a number that is equal to the sum of cubes of its
digits
Let's take an example to understand it better. Consider the number 153. To determine if 153 is an armstrong number, we need to check if the sum of its digits, each raised to the power of the number of digits, equals the original number.
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153) is equal to the original number, which means 153 is an armstrong number.
Examples:
isArmstrong(153)  -> true
isArmstrong(123)  -> false
isArmstrong(1634)  -> true
isArmstrong(1111)  -> false
 */
const isArmstrong = num => num.toFixed().split('').reduce((total, digit) => total + Math.pow(digit, num.toFixed().length), 0) === num


console.log(isArmstrong(153));
console.log(isArmstrong(123));
console.log(isArmstrong(1634));
console.log(isArmstrong(1111));


// Create a test to navigate to https://www.techglobal-training.com and validate that the 'Mock Interviews' button has the href attribute of '/login'
describe('TG training', () => {
    it('Mock Interviews href', () => {
      cy.visit('https://www.techglobal-training.com')
      cy.get('div[class*="Header_menus"]>div:nth-child(3)>a').should('have.attr','href', '/login')
    })
  })
  


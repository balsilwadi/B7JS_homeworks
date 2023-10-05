//Fizz Buzz 1
const fizzBuzz1 = (num) =>  (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : '') || num;

//Fizz Buzz 2
const fizzBuzz2 = (num) =>  Array.from({ length: num }, (_, i) => ((i + 1) % 3 === 0 ? 'Fizz' : '') + ((i + 1) % 5 === 0 ? 'Buzz' : '') || (i + 1));

//Find Sum Numbers
const findSumNumbers = (str) =>  str.split(/\D+/).reduce((sum, numStr) => numStr? sum + Number(numStr): sum, 0);

//Find Biggest Number
const findBiggestNumber = (str) =>  str.split(/\D+/).reduce((greatest, numStr) => Number(numStr) > greatest? Number(numStr) : greatest, 0);

//Count Occurrences Of Characters
const countOccurrencesOfCharacters = (str) => {
    if (str === "") return "";
    let result = ''
    let currentLetter = str[0];
    let count = 1;


    for(let i = 1; i < str.length; i++){
       if(currentLetter === str[i]) count++;
       else {
        result += count + currentLetter
        currentLetter = str[i];
        count = 1
       }
    }
    result += count + currentLetter
    return result
}

//Fibonacci Series 1
const fibonacciSeries1 = (num) =>  {
    if (num === 1) return [0];
    if (num === 2) return [0, 1];


    let result = [0, 1];


    for (let i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }


    return result;
}

//Fibonacci Series 2
const fibonacciSeries2 = (num) =>  {
    if(num === 1) return 0;
    if(num === 2 || num === 3) return 1;
    else return fibonacciSeries2(num-1) + fibonacciSeries2(num-2)
    }

//Find Uniques
const findUniques = (arr1, arr2) => [...(new Set(arr1.concat(arr2).filter(i => !(arr1.includes(i) && arr2.includes(i)))))]

//Is Power Of 3
const isPowerOf3 = (num) => {
    for(let i = num; i > 0; i/=3){
        if(i === 1) return true
    }
    return false
}

//Parse Data
const parseData = s => {
     let result = {}
     s.split('{').sort().map(str => str.split('}')).forEach(i => i[0] ?result[i[0]] = i[1]:'')
     return result
}

//Calculate Total Price 1
const calculateTotalPrice1 = items => {
     const prices = {
         apple: 2.00,
         orange: 3.29,
         mango: 4.99,
         pineapple: 5.25
     };
   
     let total = 0;
     for (let item in items) {
        total += prices[item] * items[item]
     }
     return total
}

//Calculate Total Price 2
const calculateTotalPrice2 = items => {
    const prices = {
        Apple: 2.00,
        Orange: 3.29,
        Mango: 4.99,
        Pineapple: 5.25
    };

  let total = 0;
  for (let item in items) {
    if(item === 'Apple'){
      total += Math.ceil((prices[item] - .5) * items[item])
    }else if(item === 'Mango'){
      let noSale = (prices[item] * items[item])
      let sale = (Math.floor(items[item] / 4) * prices[item])
      total += (noSale - sale)
    }else{
      total += (prices[item] * items[item])
    }
   
  }
  return Number(total.toFixed(2))
}

//Nth Word
const nthWord = (str, num) =>  str.split(/[ ]+/)[num-1] || ""

//Is Armstrong
const isArmstrong = num => num.toFixed().split('').reduce((total, i) => total + Math.pow(i,num.toFixed().length), 0) === num

//Reverse Number
const reverseNumber = num => {
    let reversed = 0;
    for(let i = num; i > 0;  i = Math.floor(i / 10)){
        reversed = (reversed * 10) + (i % 10);
    }
    return reversed;
}

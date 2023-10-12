//Nth Chars
const nthChars = (str, num) => {
    let result = '';
    for(let i = num - 1; i < str.length; i+=num){
      result+=str[i];
    }
    return result
  }


//Can Form String
const canFormString = (str1, str2) => {
    let arr1 = str1.toLowerCase();
    let arr2 = str2.toLowerCase().split('').filter(i => i != ' ');
   
    for (let i = 0; i < arr2.length; i++) {          
      if(arr1.includes(arr2[i])) arr1[arr1.indexOf(arr2[i])] = '';      
      else return false  
    }
    return true;
  }


//Is Anagram
const isAnagram = (str1, str2) =>{
    let sortedArr1 = str1.split('').sort().filter(i=>i!=' ')
    let sortedArr2 = str2.split('').sort().filter(i=>i!=' ')
   
    return sortedArr1.join('').toLowerCase() === sortedArr2.join('').toLowerCase()
 
  }


//Count Even or Odd Numbers
const count = (arr, isEven) => 
isEven ? arr.filter(i => i % 2 === 0).length : arr.filter(i => i % 2 !== 0).length


//sumDigitsDouble
const sumDigitsDouble = (str) => {
    let numbers = str.split('').filter(i => i >='0' && i <= '9')
    return numbers.length > 0 ? numbers.reduce((sum, i) => sum += Number(i),0) * 2 : -1
  }

//countOccurrence
const countOccurrence = (str1, str2) => {
    let count = 0;
    let str2Arr = str2.toLowerCase().split('').sort().join('')
   
    str1 = str1.toLowerCase();


    for (let i = 0; i <= str1.length - str2.length; i++) {
        let sub = str1.slice(i, i + str2.length).split('').sort().join('');


        if(str2Arr === sub){
            count += 1;
            i += str2.length-1;
        }


    }
    return count;
}



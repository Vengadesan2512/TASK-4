console.log("working");
//(1)*****
//(a)Print odd numbers in an array(using anonymous and IIFE)
const aargArr=[1,2,3,4,5,6,7,8,9,10]
const printoddAn = function(arr){
    for(let i=0; i < arr.length; i++){
        if(arr [i]%2 !=0) {
            console.log(arr[i]);
        }
    }
 }
 printoddAn(aargArr);

 (function(arr){
 for(let i=0; i < arr.length; i++){
    if(arr [i]%2 !=0) {
        console.log(arr[i]);
    }
}
}
 )(aargArr);
///(c)Sum of all numbers in an array(using anonymous and IIFE)
const addNumber=function(num1,num2,num3){
    console.log(num1+num2+num3);
}
addNumber(55,25,44);

(function(num1,num2,num3){
    console.log(num1+num2+num3);
})(55,77,77)

///Return all the prime numbers in an array
const numbers = [2, 3, 5, 7, 8, 11, 13, 14, 17, 19, 23];

const primeNumbers = numbers.filter(function(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;  

  if (number % 2 === 0 || number % 3 === 0) return false;

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
});
console.log(primeNumbers);
//Return all the palindromes in an array
var sample1= "madam"
const reversable= sample1.split("").reverse().join("")
console.log(sample1 === reversable);

 ////(2)
 //Print odd numbers in an array
 const arrowArr=[1,2,3,4,5,6,7,8,9,10]
 const arrowFun=(arr)=>{
        for(let i=0; i < arr.length; i++){
            if(arr [i]%2 !=0) {
                console.log(arr[i]);
            }
        }
       };
       arrowFun(arrowArr);

//Sum of all numbers in an array

const arrowAdd=(num1,num2)=>{
    console.log (num1 + num2);
    
}
arrowAdd(100,100);

//Return all the palindromes in an array

 





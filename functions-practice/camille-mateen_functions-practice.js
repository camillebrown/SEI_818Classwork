// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

function calculateCube(number){
   console.log(Math.pow(number,3))
 }
 calculateCube(5)

 //Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

 function isAVowel(char) {
   var vowels = ['a', 'e', 'i', 'o', 'u','A','E','O','I','U']
   if (vowels.includes(char)) {
     return true
   } else {
     return false
   }
 }
 console.log(isAVowel('a'));
 console.log(isAVowel('b'));
 console.log(isAVowel('E'))

 //Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

 const getTwoLengths = (a, b) => {
  const lengths = []
  lengths.push(a.length)
  lengths.push(b.length)
  return lengths
 }

 console.log(getTwoLengths('pepperoni', 'pizza'))

//  Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

const getMultipleLengths = (array) => {
  const lengths = [];
  for(let i =0;i<array.length;i++){
    lengths.push(array[i].length)
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

const maxOfThree = (num,num1,num2) => {
  let max = num
  if (max < num1){
    max = num1
  } 
  if (max < num2){
    max = num2
  }
  return max
}

console.log(maxOfThree(1, 5, 10))
console.log(maxOfThree(7, 5, 3))
console.log(maxOfThree(4, 4, 4))
console.log(maxOfThree(2, 99, 25))

//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

const printLongestWord = (array) => {
  // sort to get the longest word
  const sorted = array.sort((a,b)=> b.length - a.length)
  console.log(sorted[0]) 
}
  
  printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])


//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
//The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
//For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

const transmogrify = (num1,num2,num3) => {
  const transmogrified = (Math.pow((num1*num2),num3))
  return transmogrified
}

console.log(transmogrify(5, 3, 2));

Project Euler Problem 2
Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

function fib(num) {
var x = 1;
var y = 1;

while(y < num) {
    console.log(y);
    y += x;
    x = y - x;
}
  return y
}

console.log(fib(987));

//Adjust the function to push the even numbered values into an array.

function fibEven(num) {
var x = 1;
var y = 1;
const even = [];

while(y < num) {
    if(y % 2 === 0) even.push(y)
    y += x;
    x = y - x;
} return even
}

console.log(fibEven(987));

//Adjust the function to return the summed value of the array.

function fibEven(num) {
var x = 1;
var y = 1;
const even = [];

while(y < num) {
    if(y % 2 === 0) even.push(y)
    y += x;
    x = y - x;
} return even.reduce(function(a,b){
    return a + b
  }, 0);
}

console.log(fibEven(987));

//Find the sum of the even numbered values that do not exceed four million.

function fibEven() {
var x = 1;
var y = 1;
const even = [];

while(y < 4000000) {
    if(y % 2 === 0) even.push(y)
    y += x;
    x = y - x;
} return even.reduce(function(a,b){
    return a + b
  }, 0);
}

console.log(fibEven(987));

// A Needle in the Haystack
// Write a function findNeedle() that takes an array full of junk but contains one "needle"

const findNeedle = (array) => {
  const junk = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
  console.log("found the needle at postition", junk.indexOf('needle'))
}

console.log(findNeedle())

// Sum the Positive
// Given an array, return the sum of only the positive numbers

const sumPos = (arr) => {
  var sum = 0;
  for(var i=0; i<arr.length;i++) {
    if (arr[i]>0) {
      sum += arr[i];
  }
 }
return sum;
}

sumPos([1, -4, 7, 12])

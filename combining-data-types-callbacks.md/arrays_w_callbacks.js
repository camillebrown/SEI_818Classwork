///=================================Section 3 Array Methods with Callbacks=================================///

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
//The first question is for the numbers array. The second question is for the words array.

///=================Every=================///
// Every returns true or false values. If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
//If no false occur, every() returns true
//Note: every() does not change the original array

// Determine if every number is greater than or equal to 0

function checkNumber(num) {
    return num >= 0;
}
nums.every(checkNumber)

// Determine if every word shorter than 8 characters

function checkLength(word) {
    return word.length >= 8;
}

panagram.every(checkLength)

///=================Filter=================///
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//Note: filter() does not change the original array.

// filter the array for numbers less than 4

function checkNumber(num) {
    return num < 4;
}
nums.filter(checkNumber)

// filter words that have an even length

function checkWord(word) {
    return word.length % 2 === 0;
}
panagram.filter(checkWord)

///=================Find=================///
//The find() method returns the value of the first element in an array that pass a test (provided as a function).
//If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
//Otherwise it returns undefined
//Note: find() does not change the original array.

// Find the first value divisible by 5
function checkNumber(num) {
    return num % 5 === 0;
}
nums.find(checkNumber)

// find the first word that is longer than 5 characters

function checkWord(word) {
    return word.length > 5;
}
panagram.find(checkWord) // undefined since nothing applies

///=================Find Index=================///
// The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
//If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
//Otherwise it returns -1
//Note: find() does not change the original array.

//find the index of the first number that is divisible by 3
function checkNumber(num) {
    return num % 3 === 0;
}
nums.findIndex(checkNumber)

//find the index of the first word that is less than 2 characters long
function checkWord(word) {
    return word.length < 2;
}
panagram.findIndex(checkWord) // -1 since nothing applies

///=================For Each=================///
//The forEach() method calls a function once for each element in an array, in order.

// console.log each value of the nums array multiplied by 3
const multiply = (num) => {
    console.log (num*3)
}

nums.forEach(multiply)
// console.log each word with an exclamation point at the end of it
const yell = (word) => {
    console.log (word+'!')
}
panagram.forEach(yell)

///=================Map================///
//The map() method creates a new array with the results of calling a function for every array element.
//Note: find() does not change the original array.

//make a new array of each number multiplied by 100
const multiply = (num) => {
    return (num*100)
}

nums.map(multiply)

//make a new array of all the words in all uppercase

const uppercase = (word) => {
    return (word.toUpperCase())
}
panagram.map(uppercase)

///=================Some================///
//The some() method checks if any of the elements in an array pass a test (provided as a function).
//If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
//Otherwise it returns false
//Note: find() does not change the original array.

// Find out if some numbers are divisible by 7
function checkNumber(num) {
    return num % 7 === 0;
}
nums.some(checkNumber)

// Find out if some words have the letter a in them
function checkWord(word) {
    return word.includes('a');
}
panagram.some(checkWord)

///=================================HUNGRY FOR MORE=================================///


///=================Reduce================///
//The reduce() method reduces the array to a single value.
//The return value of the function is stored in an accumulator (result/total).
//Note: find() does not change the original array.

// Add all the numbers in the array together using the reduce method

const sum = (a, b) => {
    return a + b;
}
nums.reduce(sum)

// concatenate all the words using reduce

const concat = (word,word2) => {
    return word+word2
}
panagram.reduce(concat)

///=================Sort================///
//The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

// Try to sort without any arguments, do you get what you'd expect with the numbers array?
//Try to sort without any arguments, do you get what you'd expect with the words array? 
    //By default, the sort() method sorts the values as strings in alphabetical and ascending order.

// Sort the numbers in ascending order

const compare = (a,b) => {
    return a-b
}
nums.sort(compare)

// Sort the numbers in descending order
const compare = (a,b) => {
    return b-a
}
nums.sort(compare)

// Sort the words in ascending order
panagram.sort()
// Sort the words in descending order
const descend = (a, b) => {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
};

panagram.sort(descend)
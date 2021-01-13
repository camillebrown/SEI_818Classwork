///======================Combine objects, arrays, and functions======================///


// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    crayons: ['scarlet', 'indigo', 'yellow', 'green']
}

console.log(crayonBox.crayons[2])

// Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

const bottle = {
    cap: {
        material: 'plastic',
        color: 'blue',
        type: 'twist-off'
    }
}

console.log(bottle.cap.material)

// Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

const receipt = [
    { name: 'glasses', price: 20 }, 
    { name: 'shirt', price: 15 },
    { name: 'pants', price: 30 },
    { name: 'wallet', price: 10 },
]

console.log(receipt[2].name)

// Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
    'tall',
    ['George', 'Diane', 'Bob', 'Shelly'],
    'yellow'
]

console.log(apartmentBuilding[1][2])

///======================Combine objects, arrays, and functions more than one level deep======================///


//Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
    return {
        item: 'scarf',
        size: '6ft',
        color: 'orange'
    }
}

knit().item

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
    return {
        crayons: ['scarlet', 'indigo', 'yellow', 'green'],
        numberofCrayons: 15
    }
}

crayonSelector().crayons[1]

// Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
    return options = () => {
            console.log('Select a Song')
    }
}

console.log(powerButton()())

///=================================Model a Vending Machine =================================///
// a vending machine is an object

const vendingMachine = {
    // it has an array of snacks (make 3 snacks)
        snacks: [
    // snacks are objects that have a name and a price        
            chips = {
                name: 'Ruffles',
                price: 5
            },
            pickle = {
                name: 'Dill',
                price: 3
            } ,
            peanuts = {
                name: 'Cashews',
                price: 4
            } 
        ],
    // a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
        vend: (number) => {
            return vendingMachine.snacks[number]
        }
    // Be able to call vendingMachine.vend() with a valid integer to return a snack
}
    
vendingMachine.vend(2)

///=================================Callbacks=================================///

// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1,num2) => {
    return num1 + num2
}

add(3,6)

// Make a function subtract that takes two arguments (numbers) and subtracts them

const subtract = (num1,num2) => {
    return num1 - num2
}

subtract(15,3)
// Make a function multiply that takes two arguments and multiplies them

const multiply = (num1,num2) => {
    return num1 * num2
}

multiply(10,8)
// Make a function divide that takes two arguments and divides them
const divide = (num1,num2) => {
    return num1 / num2
}

divide(56,7)
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

const calculate = (num1,num2,callback) => {
    return callback(num1,num2);
}
  
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.

calculate(56,7,multiply)
// Call calculate 4 times, each time using one of the operation functions you wrote
calculate(56,7,divide)
calculate(56,7,subtract)
calculate(56,7,add)

///=================================Function definition placement=================================///

//Clean up this code, so that it works and has function definitions in the correct place
//=====OLD/INCORRECT=====//
bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}

//=====NEW/CORRECT=====//

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

///=================================Error reading=================================///

//What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}

//Answer: We're missing the initializer (=) that is required in ES6 to begin the function. We should have foo=()=>{ and then the code to run. We also have the function called before it is defined but that has a different error message: "Cannot access 'foo' before initialization"




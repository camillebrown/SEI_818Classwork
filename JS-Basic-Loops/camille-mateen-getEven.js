//GET EVEN
//Problem 1: Write a for loop that will log only the even numbers in 0 through 200.


for (var i = 0; i <= 200; i++) {
    if (i%2 === 0) console.log (i)}
  
  // EXCITED KITTEN
  // Problem 1: Write code that logs "Love me, pet me! HSSSSSS!" 10 times.
  
  for (var i = 0; i<10; i++) {
    console.log ("Love me, pet me! HSSSSSS!")
  }
  // Problem 2: For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", or "...why does the red dot always get away..." at random.
  
  const textArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?",  "...why does the red dot always get away..."]
  
  var x = Math.floor(5*Math.random())
  
  for (var i = 0; i<10; i++) {
    if (i%2 === 0) console.log(textArray[x])
  }
  
  // THERMOSTAT
  // Problem 1: Declare a variable called currentTemp that stores the current temperature. Set this to a random whole number between 1 and 100.
  
   var currentTemp = Math.floor(100*Math.random())
   console.log(currentTemp)
  
  //  Problem 2: Declare a variable called desiredTemp that is the temperature in Fahrenheit, that you personally like to relax at. (For most of us, this is between 68 and 72!)
  
  var desiredTemp = Math.floor(Math.random() * (72 - 68) ) + 68
  console.log(desiredTemp)
  
  // Problem 3: Print out the current temperature is. 
  
  console.log ("The current temperature is " + currentTemp + "F")
  
  // Problem 4: While the temperature is too low, add a degree to the current temperature. Every time you increase the temperature, print out the current temperature again. For example:
  
  if (currentTemp<68) {
  for (var i = currentTemp; currentTemp<68; currentTemp++) {
    console.log ("The current temperature is now " + (currentTemp + 1) + "F")
  }
  }
  
  // Problem 5: While the temperature is too high, subtract a degree from the current temperature. Every time you decrease the temperature, print out the current temperature again.
  
  if (currentTemp>72) {
  for (var i = currentTemp; currentTemp>72; currentTemp--) {
    console.log ("The current temperature is now " + (currentTemp - 1) + "F")
  }
  }
  
  // FIZZ BUZZ
  //Problem 1: Write a javascript application that logs all numbers from 1 - 100.
  
  for (var i = 1; i <= 100; i++) {
    console.log (i)}
  
  //Problem 2-4: If a number is divisible by 3 log "Fizz" instead of the number.
  
  for (var i = 1; i <= 100; i++) {
    if (i%5 === 0 && i%3 === 0) console.log ('fizzbuzz')
    else if (i%3 === 0) console.log ('fizz')
    else if (i%5 === 0) console.log ('buzz')
    else console.log (i)
    }
  
  
  // BONUS: What's my number?
  // Use a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333".
  
  var phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555",
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
  }
  
  for (var person in phoneBook) {
    if (phoneBook[person] === '333-333-3333')
    console.log (person)
  }